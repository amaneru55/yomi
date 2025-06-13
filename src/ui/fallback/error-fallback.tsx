import type { FC } from "react";

import error from "../../assets/lottie/error.json";
import Fallback from "./fallback";
import type { BuiltInFallbackProps } from "./types";

export const ErrorFallback: FC<BuiltInFallbackProps> = (props) => {
	return (
		<Fallback
			animationData={error}
			lottieProps={{
				style: {
					width: 240,
				},
				loop: false,
			}}
			gap={0}
			delay={0.8}
			{...props}
		/>
	);
};

export default ErrorFallback;
