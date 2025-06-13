import { Button } from "@heroui/react";
import type { FC } from "react";

import { CrashFallback } from "@ui/fallback";

const Crash: FC = () => {
	return (
		<div className="h-screen grid place-items-center">
			<CrashFallback
				title={"似乎发生了一个错误"}
				actions={[
					<Button
						variant="flat"
						key={"refresh"}
						onPress={() => window.location.reload()}
						fullWidth
					>
						刷新
					</Button>,
					<Button
						color="primary"
						key={"home"}
						onPress={() => {
							window.location.href = "/";
						}}
						fullWidth
					>
						返回首页
					</Button>,
				]}
			/>
		</div>
	);
};

export default Crash;
