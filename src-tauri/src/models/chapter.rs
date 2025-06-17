use crate::models::Page;
use crate::traits::ArchiveReader;
use mime::Mime;

pub struct Chapter {
    pub id: String,
    pub title: String,
    pub pages: u32,
    pub read: bool,
    pub path: String,
}

impl Chapter {
    pub fn get_reader(&self) -> Option<Box<dyn ArchiveReader>> {
        // 根据 `self.path` 获取对应的 ArchiveReader 实现， .zip, .cbz 返回 Some(ZipReader)

        let extension = self.path.split('.').last().unwrap_or_default();

        match extension {
            "zip" | "cbz" => Some(Box::new(crate::models::ZipReader {
                path: self.path.clone(),
            })),
            _ => None,
        }
    }

    pub fn read_page(&self, index: usize) -> Option<Page> {
        let reader = self.get_reader();
        if reader.is_none() {
            return None;
        }
        let reader = reader.unwrap();

        let file_name = reader.get_file_name_by_index(index).unwrap_or_default();
        let mime = mime_guess::from_path(&file_name).first();
        let data = reader.read_file(&file_name);

        Some(Page::new(
            self.id.clone(),
            index,
            Some(file_name),
            data,
            mime,
        ))
    }
}
