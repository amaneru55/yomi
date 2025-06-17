use mime::Mime;

pub struct Page {
    chapter_id: String,
    index: usize,
    name: Option<String>,
    data: Option<Vec<u8>>,
    mime: Option<Mime>,
}

impl Page {
    pub fn new(
        chapter_id: String,
        index: usize,
        name: Option<String>,
        data: Option<Vec<u8>>,
        mime: Option<Mime>,
    ) -> Self {
        Self {
            chapter_id,
            index,
            name,
            data,
            mime,
        }
    }

    pub fn get_url(&self) -> String {
        format!(
            "archive://chapters/{}/pages/{}",
            self.chapter_id, self.index
        )
    }
}
