import { type FC, lazy, useEffect } from "react";
import { useNavigate } from "react-router";

import { PriamryPath } from "@/enums/path";

import { mangaData } from "./mock-data";

const MangaCard = lazy(() => import("@ui/manga-card"));

const Mangas: FC = () => {
	const navigate = useNavigate();

	const handlePress = (id: string) => {
		navigate(PriamryPath.Manga.replace(":mangaId", id));
	};

	useEffect(() => {
		const preloadManga = async () => {
			try {
				await import("@pages/manga-detail");
			} catch (err) {
				console.error("Failed to preload manga component:", err);
			}
		};
		preloadManga();
	}, []);

	return (
		<div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{mangaData.map((manga) => (
				<MangaCard
					key={manga.id}
					manga={manga}
					onPress={() => handlePress(manga.id)}
				/>
			))}
		</div>
	);
};

export default Mangas;
