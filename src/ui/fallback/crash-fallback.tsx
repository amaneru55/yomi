import type { FC } from "react";

import crash from "../../assets/lottie/error-cat.json";
import Fallback from "./fallback";
import type { BuiltInFallbackProps } from "./types";

export const CrashFallback: FC<BuiltInFallbackProps> = (props) => {
	return (
		<Fallback
			animationData={crash}
			lottieProps={{
				style: {
					width: 240,
				},
				loop: false,
			}}
			gap={0}
			delay={0}
			{...props}
		/>
	);
};

export default CrashFallback;
