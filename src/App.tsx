import MangasLayout from "@pages/manga-layout";
import NotFound from "@pages/not-found";
import { platform } from "@tauri-apps/plugin-os";
import { lazy } from "react";
import { Route, Routes } from "react-router";
import { PriamryPath } from "./enums/path";
import { getAssetsUrlPrefix } from "./utils/get-protocol-url-prefix";

const Mangas = lazy(() => import("@pages/mangas"));
const Reader = lazy(() => import("@pages/manga"));
const MangaDetail = lazy(() => import("@/pages/manga-detail"));

function App() {
	return (
		// <Routes>
		// 	<Route path="/" element={<MangasLayout />}>
		// 		<Route index element={<Mangas />} />
		// 		<Route path={PriamryPath.Manga} element={<MangaDetail />} />
		// 		<Route path={PriamryPath.Reader} element={<Reader />} />
		// 	</Route>
		// 	<Route path={PriamryPath.NotFound} element={<NotFound />} />
		// </Routes>
		// biome-ignore lint/a11y/useAltText: <explanation>
		<img
			// src="archive://chapter/1/page/2"
			src="http://archive.localhost/chapter/1/page/2"
			// src={`${getAssetsUrlPrefix(platform(), "archive")}chapter/1/page/2`}
			className="w-full h-full aspect-auto"
		/>
	);
}

export default App;
