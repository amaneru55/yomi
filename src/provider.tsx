import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { Provider as JotaiProvider } from "jotai";
import type { FC, PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useHref, useNavigate } from "react-router";
import { SWRConfig } from "swr";

import Crash from "@components/crash";
import { globalStore } from "./global-store";

const Provider: FC<PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate();

	return (
		<JotaiProvider store={globalStore}>
			<SWRConfig>
				<HeroUIProvider navigate={navigate} useHref={useHref}>
					<ErrorBoundary fallback={<Crash />}>{children}</ErrorBoundary>
					<ToastProvider />
				</HeroUIProvider>
			</SWRConfig>
		</JotaiProvider>
	);
};

export default Provider;
