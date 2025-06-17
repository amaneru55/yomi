use crate::{
    enums::SourceType,
    models::{Chapter, Manga, Page},
};

pub trait MangaSource {
    fn id(&self) -> SourceType;

    async fn add_manga(&self, manga_id: impl AsRef<str>) -> Result<(), String>;

    async fn remove_manga(&self, manga_id: impl AsRef<str>) -> Result<(), String>;

    async fn get_manga_list(&self, query: impl AsRef<str>) -> Result<Vec<Manga>, String>;

    async fn get_manga(&self, manga_id: impl AsRef<str>) -> Result<Option<Manga>, String>;

    async fn get_chapters(&self, manga_id: impl AsRef<str>) -> Result<Vec<Chapter>, String>;

    async fn get_chapter_total_page(&self, chapter_id: impl AsRef<str>) -> Result<u32, String>;

    async fn get_chapter_pages(&self, chapter_id: impl AsRef<str>) -> Result<Vec<Page>, String>;
}
