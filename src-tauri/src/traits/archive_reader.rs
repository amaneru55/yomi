pub trait ArchiveReader {
    fn get_file_list(&self, path: &str) -> Vec<String>;

    fn get_file_name_by_index(&self, index: usize) -> Option<String>;

    fn read_file(&self, path: &str) -> Option<Vec<u8>>;
}
