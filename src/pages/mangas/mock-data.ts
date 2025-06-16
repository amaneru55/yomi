import type { Manga } from "@/types/manga";

export const mangaData: Manga[] = [
	{
		id: "1",
		title: "One Piece",
		cover: "https://img.heroui.chat/image/book?w=400&h=600&u=one-piece",
		tags: [
			{ id: "1", name: "Adventure" },
			{ id: "2", name: "Pirate" },
			{ id: "3", name: "Shounen" },
			{ id: "4", name: "Fantasy" },
		],
		summary:
			"Follow Monkey D. Luffy and his pirate crew in their search for the ultimate treasure, One Piece.",
	},
	{
		id: "2",
		title: "Naruto",
		cover: "https://img.heroui.chat/image/book?w=400&h=600&u=naruto",
		tags: [
			{ id: "5", name: "Action" },
			{ id: "6", name: "Ninja" },
			{ id: "3", name: "Shounen" },
		],
		summary:
			"Naruto Uzumaki, a young ninja with a sealed demon within him, seeks to become the Hokage, the leader of his village.",
	},
	{
		id: "3",
		title: "Attack on Titan",
		cover: "https://img.heroui.chat/image/book?w=400&h=600&u=attack-on-titan",
		tags: [
			{ id: "8", name: "Dark Fantasy" },
			{ id: "9", name: "Post-apocalyptic" },
		],
		summary:
			"Humanity fights for survival against man-eating giants in a post-apocalyptic world.",
	},
	{
		id: "4",
		title: "Death Note",
		cover: "https://img.heroui.chat/image/book?w=400&h=600&u=death-note",
		tags: [
			{ id: "10", name: "Mystery" },
			{ id: "11", name: "Psychological" },
			{ id: "12", name: "Thriller" },
		],
		summary:
			"A high school student discovers a notebook that allows him to kill anyone by writing their name in it.",
	},
	{
		id: "5",
		title: "Fullmetal Alchemist",
		cover:
			"https://img.heroui.chat/image/book?w=400&h=600&u=fullmetal-alchemist",
		tags: [
			{ id: "1", name: "Adventure" },
			{ id: "4", name: "Fantasy" },
			{ id: "3", name: "Shounen" },
		],
		summary:
			"Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
	},
];
