use std::io::Read;

use crate::traits::ArchiveReader;
use zip;

pub struct ZipReader {
    pub path: String,
}

impl ArchiveReader for ZipReader {
    fn get_file_list(&self, path: &str) -> Vec<String> {
        let mut zip = zip::ZipArchive::new(std::fs::File::open(&self.path).unwrap()).unwrap();
        let mut file_list = Vec::new();
        for i in 0..zip.len() {
            if let Ok(file) = zip.by_index(i) {
                if file.name().starts_with(path) {
                    file_list.push(file.name().to_string());
                }
            }
        }
        file_list
    }

    fn get_file_name_by_index(&self, index: usize) -> Option<String> {
        let mut zip = zip::ZipArchive::new(std::fs::File::open(&self.path).unwrap()).unwrap();
        if index < zip.len() {
            Some(zip.by_index(index).unwrap().name().to_string())
        } else {
            None
        }
    }

    fn read_file(&self, path: &str) -> Option<Vec<u8>> {
        let mut zip = zip::ZipArchive::new(std::fs::File::open(&self.path).unwrap()).unwrap();
        let mut file = zip.by_name(path).ok()?;
        let mut buffer = Vec::new();
        file.read_to_end(&mut buffer).ok()?;
        Some(buffer)
    }
}
