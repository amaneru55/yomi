import type { FC } from "react";

import failed from "../../assets/lottie/failed.json";
import Fallback from "./fallback";
import type { BuiltInFallbackProps } from "./types";

export const FailedFallback: FC<BuiltInFallbackProps> = (props) => {
	return (
		<Fallback
			animationData={failed}
			lottieProps={{
				style: {
					width: 160,
				},
				loop: false,
			}}
			delay={0.6}
			gap={8}
			{...props}
		/>
	);
};

export default FailedFallback;
