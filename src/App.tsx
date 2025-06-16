import { lazy } from "react";
import { Route, Routes } from "react-router";

import MangasLayout from "@pages/manga-layout";
import NotFound from "@pages/not-found";
import { PriamryPath } from "./enums/path";

const Mangas = lazy(() => import("@pages/mangas"));
const Reader = lazy(() => import("@pages/manga"));
const MangaDetail = lazy(() => import("@/pages/manga-detail"));

function App() {
	return (
		<Routes>
			<Route path="/" element={<MangasLayout />}>
				<Route index element={<Mangas />} />
				<Route path={PriamryPath.Manga} element={<MangaDetail />} />
				<Route path={PriamryPath.Reader} element={<Reader />} />
			</Route>
			<Route path={PriamryPath.NotFound} element={<NotFound />} />
		</Routes>
	);
}

export default App;
