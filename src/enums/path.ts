export const PriamryPath = {
	Mangas: "/mangas",
	Manga: "/mangas/:mangaId",
} as const;

export type PrimaryPath = (typeof PriamryPath)[keyof typeof PriamryPath];
