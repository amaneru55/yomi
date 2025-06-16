use strum_macros::{AsRefStr, Display, EnumIter, EnumString};

#[derive(EnumString, Debug, Clone, PartialEq, Eq, Display, AsRefStr, EnumIter)]
#[strum(serialize_all = "snake_case")]
pub enum SourceType {
    Local,
    MangaDex,
}
