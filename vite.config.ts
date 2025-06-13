import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-oxc";
import { defineConfig } from "vite";

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
	plugins: [react(), tailwindcss()],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@components": path.resolve(__dirname, "src/components"),
			"@ui": path.resolve(__dirname, "src/ui"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@apis": path.resolve(__dirname, "src/apis"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@data": path.resolve(__dirname, "src/data"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@icons": path.resolve(__dirname, "src/icons"),
			"@enums": path.resolve(__dirname, "src/enums"),
			"@schemas": path.resolve(__dirname, "src/schemas"),
			"@mappings": path.resolve(__dirname, "src/mappings"),
		},
	},

	// Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
	//
	// 1. prevent vite from obscuring rust errors
	clearScreen: false,
	// 2. tauri expects a fixed port, fail if that port is not available
	server: {
		port: 1420,
		strictPort: true,
		host: host || false,
		hmr: host
			? {
					protocol: "ws",
					host,
					port: 1421,
				}
			: undefined,
		watch: {
			// 3. tell vite to ignore watching `src-tauri`
			ignored: ["**/src-tauri/**"],
		},
	},
}));
