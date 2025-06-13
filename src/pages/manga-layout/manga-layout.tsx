import { AnimatePresence } from "framer-motion";
import type { FC } from "react";
import { Outlet, useLocation } from "react-router";

const MangaLayout: FC = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Outlet key={location.pathname} />
		</AnimatePresence>
	);
};

export default MangaLayout;
