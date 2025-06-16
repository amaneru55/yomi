import { Button, Card, CardBody, Chip, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { type FC, useEffect } from "react";
import { useParams } from "react-router";

import { mangaData } from "../mangas/mock-data";

const MangaDetail: FC = () => {
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
		<div className="max-w-3xl mx-auto" key={manga.id}>
			<div className="flex flex-col md:flex-row gap-6">
				<motion.div
					className="w-full md:w-1/3 h-[400px] overflow-hidden"
					layoutId={`manga-${manga.id}-cover`}
				>
					<Image
						removeWrapper
						alt={manga.title}
						className="object-cover h-[400px]"
						src={manga.cover}
					/>
				</motion.div>
				<div className="flex-1">
					<motion.h4
						className="text-2xl font-bold mb-2"
						layoutId={`manga-${manga.id}-title`}
					>
						{manga.title}
					</motion.h4>
					<div className="flex flex-wrap gap-1 mb-4">
						{manga.tags.map((tag) => (
							<motion.div
								key={tag.id}
								layoutId={`manga-${manga.id}-tag-${tag.id}`}
							>
								<Chip size="sm" variant="flat">
									{tag.name}
								</Chip>
							</motion.div>
						))}
					</div>
					<motion.p
						layoutId={`manga-${manga.id}-summary`}
						className="text-default-500 mb-4"
					>
						{manga.summary}
					</motion.p>
					<Button
						color="primary"
						variant="light"
						startContent={<Icon icon="lucide:arrow-left" />}
						onPress={() => window.history.back()}
					>
						Back to List
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MangaDetail;
