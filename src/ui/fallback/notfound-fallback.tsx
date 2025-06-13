import type { FC } from "react";

import notfound from "../../assets/lottie/404.json";
import Fallback from "./fallback";
import type { BuiltInFallbackProps } from "./types";

export const NotfoundFallback: FC<BuiltInFallbackProps> = (props) => {
	return (
		<Fallback
			animationData={notfound}
			lottieProps={{
				style: {
					width: 300,
				},
				loop: false,
			}}
			gap={8}
			delay={0.5}
			{...props}
		/>
	);
};

export default NotfoundFallback;
