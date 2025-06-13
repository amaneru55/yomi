import type { FC } from "react";

import empty from "../../assets/lottie/empty-person.json";
import Fallback from "./fallback";
import type { BuiltInFallbackProps } from "./types";

export const EmptyFallback: FC<BuiltInFallbackProps> = (props) => {
	return (
		<Fallback
			animationData={empty}
			lottieProps={{
				style: {
					width: 200,
				},
				loop: false,
			}}
			gap={16}
			delay={0.5}
			{...props}
		/>
	);
};

export default EmptyFallback;
