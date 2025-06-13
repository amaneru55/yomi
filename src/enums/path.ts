export const PriamryPath = {
	Mangas: "/mangas",
	Manga: "/mangas/:bookId",
} as const;

export type PrimaryPath = (typeof PriamryPath)[keyof typeof PriamryPath];
