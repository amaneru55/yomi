import type { Manga } from "@/types/manga";
import { Chip, Image } from "@heroui/react";
import { motion } from "framer-motion";
import type { FC } from "react";

export interface MangaCardProps {
	manga: Manga;
	onPress?: () => void;
}

const MangaCard: FC<MangaCardProps> = ({ manga, onPress }) => {
	return (
		<div
			data-clickable={onPress !== undefined}
			onClick={onPress}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					onPress?.();
				}
			}}
			className="max-w-sm data-[clickable='true']:cursor-pointer h-[400px] group relative rounded-lg"
		>
			<motion.div
				className="w-full h-full rounded-lg overflow-hidden"
				layoutId={`manga-${manga.id}-cover`}
			>
				<Image
					removeWrapper
					alt={manga.title}
					className="w-full h-full object-cover absolute inset-0 transition-transform duration-300"
					src={manga.cover}
				/>
			</motion.div>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 opacity-70 group-hover:opacity-90" />
			<div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
				<div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-t-lg" />
				<div className="relative z-20">
					{" "}
					{/* Wrap content in a relative container */}
					<motion.h4
						layoutId={`manga-${manga.id}-title`}
						className="font-bold text-xl mb-2"
					>
						{manga.title}
					</motion.h4>
					<div className="flex flex-wrap gap-1 mb-2">
						{manga.tags.map((tag) => (
							<motion.div
								key={tag.id}
								layoutId={`manga-${manga.id}-tag-${tag.id}`}
							>
								<Chip
									size="sm"
									variant="flat"
									className="bg-white/20 text-white"
								>
									{tag.name}
								</Chip>
							</motion.div>
						))}
					</div>
					<motion.p
						className="text-sm text-white/90 line-clamp-3 mb-2"
						layoutId={`manga-${manga.id}-summary`}
					>
						{manga.summary}
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default MangaCard;
