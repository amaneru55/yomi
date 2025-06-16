import { motion } from "framer-motion";
import { type FC, useEffect } from "react";
import { useNavigate } from "react-router";

import { PriamryPath } from "@/enums/path";

const cover =
	"https://mangadex.org/covers/312e47bc-5749-4be8-8a23-19f1f909949d/0c990fa1-2c77-45f7-a5fb-4324517f8afe.jpg";

const mangas = [
	{
		cover,
		id: "1",
	},
];

const Mangas: FC = () => {
	const navigate = useNavigate();

	const handlePress = (id: string) => {
		navigate(PriamryPath.Manga.replace(":mangaId", id));
	};

	useEffect(() => {
		const preloadManga = async () => {
			try {
				await import("@pages/manga");
			} catch (err) {
				console.error("Failed to preload manga component:", err);
			}
		};
		preloadManga();
	}, []);

	return (
		<div className="grid grid-cols-5 px-4 py-6">
			{mangas.map((manga) => (
				<div
					key={manga.id}
					className="cursor-pointer"
					onClick={() => handlePress(manga.id)}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							handlePress(manga.id);
						}
					}}
				>
					<motion.img
						src={manga.cover}
						layoutId={`manga-cover-${manga.id}`}
						className="w-full aspect-auto"
					/>
				</div>
			))}
		</div>
	);
};

export default Mangas;
