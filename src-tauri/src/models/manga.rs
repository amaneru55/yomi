use crate::models::{Author, Chapter, Tag};

pub struct Manga {
    id: String,
    title: String,
    author: Author,
    summary: String,
    cover: String,
    chapters: Vec<Chapter>,
    tags: Vec<Tag>,
}
