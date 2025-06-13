import type { FC } from "react";

import loading from "../../assets/lottie/triangle-loading.json";
import Fallback from "./fallback";
import type { BuiltInFallbackProps } from "./types";

export const LoadingFallback: FC<BuiltInFallbackProps> = (props) => {
	return (
		<Fallback
			animationData={loading}
			lottieProps={{
				style: {
					width: 160,
				},
			}}
			gap={16}
			delay={0}
			duration={0.2}
			{...props}
		/>
	);
};

export default LoadingFallback;
