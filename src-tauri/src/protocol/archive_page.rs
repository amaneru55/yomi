use std::time::UNIX_EPOCH;

use mime_guess::from_path;
use tauri::{
    http::{Request, Response},
    Runtime, UriSchemeContext, UriSchemeResponder,
};
use tokio::fs;

pub fn archive_page_protocol_handler(
    context: UriSchemeContext<'_, impl Runtime>,
    request: Request<Vec<u8>>,
    responder: UriSchemeResponder,
) {
    tauri::async_runtime::spawn(async move {
        let path = request.uri().path().trim_start_matches('/');
        println!("Request path: {}", path);
        let meta = match fs::metadata("1.jpg").await {
            Ok(m) => m,
            Err(_) => {
                eprintln!("Failed to read metadata for 1.jpg");
                return responder
                    .respond(Response::builder().status(404).body(Vec::new()).unwrap());
            }
        };

        let modified = meta
            .modified()
            .ok()
            .and_then(|time| time.duration_since(UNIX_EPOCH).ok())
            .map(|dur| dur.as_secs())
            .unwrap_or(0);

        let etag = format!("\"{}\"", modified);

        // 处理浏览器的 If-None-Match
        let not_modified = request
            .headers()
            .get("If-None-Match")
            .map(|v| v.to_str().unwrap_or("") == etag)
            .unwrap_or(false);

        if not_modified {
            responder.respond(
                Response::builder()
                    .status(304)
                    .header("ETag", etag)
                    .body(Vec::new())
                    .unwrap(),
            );
            return;
        }

        // 读取根目录下的 1.jpg 文件 并返回
        let buffer = fs::read("1.jpg").await;

        if buffer.is_err() {
            eprintln!("Failed to read 1.jpg");
            return responder.respond(Response::builder().status(404).body(Vec::new()).unwrap());
        }

        let buffer = buffer.unwrap();

        // 推测 MIME 类型
        // let mime = mime_guess::from_path(&path).first_or_octet_stream();
        let mime = from_path("1.jpg").first_or_octet_stream();

        // let data = std::fs::read(format!("assets/{}", path)).unwrap_or_default();
        let resp = Response::builder()
            .status(200)
            .header("Content-Type", mime.as_ref())
            .header("Cache-Control", "public, max-age=0")
            .header("ETag", etag)
            .body(buffer)
            .unwrap();

        // 返回给 WebView
        responder.respond(resp);
    });
}
