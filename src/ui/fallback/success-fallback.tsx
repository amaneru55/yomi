import type { FC } from "react";

import success from "../../assets/lottie/success.json";
import Fallback from "./fallback";
import type { BuiltInFallbackProps } from "./types";

export const SuccessFallback: FC<BuiltInFallbackProps> = (props) => {
	return (
		<Fallback
			animationData={success}
			lottieProps={{
				style: {
					width: 160,
				},
				loop: false,
			}}
			delay={1.6}
			gap={8}
			{...props}
		/>
	);
};

export default SuccessFallback;
