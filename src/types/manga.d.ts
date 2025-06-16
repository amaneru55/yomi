import type { Tag } from "./tag";

export type Manga = {
	id: string;
	title: string;
	cover: string;
	summary: string;
	tags: Tag[];
};
