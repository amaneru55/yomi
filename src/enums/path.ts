export const PriamryPath = {
	Mangas: "/mangas",
	Manga: "/mangas/:mangaId",
	Reader: "/mangas/:mangaId/reader",
	NotFound: "*",
} as const;

export type PrimaryPath = (typeof PriamryPath)[keyof typeof PriamryPath];
