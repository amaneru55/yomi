import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import type { FC } from "react";

import { Spacer, cn } from "@heroui/react";
import type { FallbackProps } from "./types";

export const Fallback: FC<FallbackProps> = ({
	title,
	animationData,
	lottieProps,
	tip,
	actions,
	delay = 0.3,
	duration = 0.5,
	gap = 16,
	className = "",
}) => {
	return (
		<AnimatePresence mode="sync">
			<div
				className={cn("p-4", "flex flex-col items-center relative", className)}
				style={{ gap: `${gap}px` }}
			>
				<Lottie animationData={animationData} {...lottieProps} />
				<motion.div
					className="flex flex-col items-center text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ delay, duration }}
				>
					<h2 className="font-semibold text-lg">{title}</h2>
					<Spacer y={1} />
					<div className="text-default-500 text-small">{tip}</div>
					<Spacer y={4} />
					{actions?.length ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ delay: delay + duration, duration: 0.5 }}
							className="flex flex-col xs:flex-row items-center gap-4"
						>
							{...actions}
						</motion.div>
					) : null}
				</motion.div>
			</div>
		</AnimatePresence>
	);
};

export default Fallback;
