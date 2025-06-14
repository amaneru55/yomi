import { useEffect, type FC } from "react";
import { motion } from 'framer-motion'
import { useParams } from "react-router";

const cover = "https://mangadex.org/covers/312e47bc-5749-4be8-8a23-19f1f909949d/0c990fa1-2c77-45f7-a5fb-4324517f8afe.jpg"

const Manga: FC = () => {
	const { mangaId } = useParams<{ mangaId: string }>();

	useEffect(() => {
		const preloadMangas = async () => {
			try {
				await import("@pages/mangas");
			} catch (err) {
				console.error("Failed to preload mangas component:", err);
			}
		};
		preloadMangas();
	}, [])

	if (!mangaId) {
		return <div className="text-red-500">Manga ID is missing</div>;
	}

	return (
		<div className="flex flex-col items-center">
			<motion.img
				src={cover}
				alt="Manga Cover"
				layoutId={`manga-cover-${mangaId}`}
			/>
		</div>
	);
};

export default Manga;
