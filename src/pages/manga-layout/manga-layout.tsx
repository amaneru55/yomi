import { Spinner } from "@heroui/react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import type { FC } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router";

const LoadingFallback: FC = () => (
	<div className="flex justify-center py-12">
		<Spinner variant="wave" />
	</div>
);

const MangaLayout: FC = () => {
	return (
		<Suspense fallback={<LoadingFallback />}>
			<LayoutGroup>
				<AnimatePresence mode="sync">
					<Outlet />
				</AnimatePresence>
			</LayoutGroup>
		</Suspense>
	);
};

export default MangaLayout;
