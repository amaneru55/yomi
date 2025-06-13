import type { LottieComponentProps } from "lottie-react";
import type { ReactNode } from "react";

export interface FallbackProps {
	title?: string | ReactNode;
	animationData: LottieComponentProps["animationData"];
	lottieProps?: Omit<LottieComponentProps, "animationData">;
	tip?: string | ReactNode;
	actions?: ReactNode[];
	delay?: number;
	duration?: number;
	gap?: number;
	className?: string;
}

export type BuiltInFallbackProps = Omit<
	FallbackProps,
	"animationData" | "lottieProps" | "delay" | "duration" | "gap"
>;
