import { lazy } from "react";
import { Route, Routes } from "react-router";

import MangasLayout from "@pages/manga-layout";
import { PriamryPath } from "./enums/path";

const Mangas = lazy(() => import("@pages/mangas"));
const Manga = lazy(() => import("@pages/manga"));

function App() {
	return (
		<Routes>
			<Route path="/" element={<MangasLayout />}>
				<Route index element={<Mangas />} />
				<Route path={PriamryPath.Manga} element={<Manga />} />
			</Route>
		</Routes>
	);
}

export default App;
