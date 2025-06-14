import { useEffect, type FC } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { PriamryPath } from "@/enums/path";

const cover = "https://mangadex.org/covers/312e47bc-5749-4be8-8a23-19f1f909949d/0c990fa1-2c77-45f7-a5fb-4324517f8afe.jpg"

const Mangas: FC = () => {
	const navigate = useNavigate()

useEffect(() => {
  const preloadManga = async () => {
    try {
      await import("@pages/manga");
    } catch (err) {
      console.error("Failed to preload manga component:", err);
    }
  };
  preloadManga();
}, [])

	return (
		<div className="grid grid-cols-5 px-4 py-6">
			<div className="cursor-pointer" onClick={() => {
				navigate(PriamryPath.Manga.replace(":mangaId", "1"));
			}}>
				<motion.img src={cover} layoutId={`manga-cover-1`} className="w-full aspect-auto" />
			</div>
		</div>
	);
};

export default Mangas;
