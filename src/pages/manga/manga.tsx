import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { type FC, useEffect } from "react";
import { useParams } from "react-router";

import { mangaData } from "../mangas/mock-data";

const Manga: FC = () => {
	const { mangaId } = useParams<{ mangaId: string }>();

	useEffect(() => {
		const preloadMangas = async () => {
			try {
				await Promise.all([import("@pages/mangas"), import("@ui/manga-card")]);
			} catch (err) {
				console.error("Failed to preload mangas component:", err);
			}
		};
		preloadMangas();
	}, []);

	if (!mangaId) {
		return <div className="text-red-500">Manga ID is missing</div>;
	}

	const manga = mangaData.find((m) => m.id === mangaId);

	if (!manga) {
		return <div className="text-red-500">Manga not found</div>;
	}

	return (
		<div className="flex flex-col items-center">
			<motion.div layoutId={`manga-${manga.id}-cover`}>
				<Image src={manga.cover} alt="Manga Cover" />
			</motion.div>
		</div>
	);
};

export default Manga;
