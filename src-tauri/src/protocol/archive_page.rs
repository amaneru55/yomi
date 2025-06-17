use std::{borrow::Cow, fs};
use tauri::{
    http::{Request, Response},
    Runtime, UriSchemeContext,
};

pub fn archive_page_protocol_handler(
    context: UriSchemeContext<'_, impl Runtime>,
    request: Request<Vec<u8>>,
) -> Response<impl Into<Cow<'static, [u8]>>> {
    println!("{}", request.uri());

    // 读取根目录下的 1.jpg 文件 并返回
    let buffer = fs::read("1.jpg").unwrap_or_else(|_| {
        eprintln!("Failed to read 1.jpg");
        Vec::new()
    });

    Response::builder()
        .header("Cache-Control", "public, max-age=31536000") // 1 year
        .header("Content-Type", "image/jpeg")
        .status(200)
        .body(buffer)
        .unwrap()
}
