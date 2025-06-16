use crate::{
    enums::SourceType,
    models::{Chapter, Manga, Page},
};

pub trait MangaSource {
    fn id(&self) -> SourceType;

    async fn add_manga<T: AsRef<str>>(&self, id: T) -> Result<(), String>;

    async fn remove_manga<T: AsRef<str>>(&self, id: T) -> Result<(), String>;

    async fn get_manga_list<T: AsRef<str>>(&self, query: T) -> Result<Vec<Manga>, String>;

    async fn get_manga<T: AsRef<str>>(&self, id: T) -> Result<Option<Manga>, String>;

    async fn get_chapters<T: AsRef<str>>(&self, manga_id: T) -> Result<Vec<Chapter>, String>;

    async fn get_chapter_total_page<T: AsRef<str>>(&self, chapter_id: T) -> Result<u32, String>;

    async fn get_chapter_pages<T: AsRef<str>>(&self, chapter_id: T) -> Result<Vec<Page>, String>;
}
