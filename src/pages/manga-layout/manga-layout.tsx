import { AnimatePresence } from "framer-motion";
import type { FC } from "react";
import { Outlet, useLocation } from "react-router";
import { Suspense } from "react";
import { Spinner } from "@heroui/react";

const LoadingFallback: FC = () => (
	<div className="flex justify-center py-12"><Spinner variant="wave" /></div>
)

const MangaLayout: FC = () => {
	const location = useLocation();
	return (
		<Suspense fallback={<LoadingFallback />}>
			<AnimatePresence mode="wait">
				<Outlet key={location.pathname} />
			</AnimatePresence>
		</Suspense>
	);
};

export default MangaLayout;
