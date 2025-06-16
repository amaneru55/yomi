import { Button } from "@heroui/react";
import type { FC } from "react";

import NotfoundFallback from "@ui/fallback/notfound-fallback";

const NotFound: FC = () => {
	return (
		<div className="h-screen grid place-items-center">
			<NotfoundFallback
				title={"404 | Page Not Found"}
				tip={"你所浏览的页面不存在，或已经被移除了"}
				actions={[
					<Button
						key="back"
						variant="flat"
						onPress={() => window.history.back()}
					>
						返回
					</Button>,
					<Button
						key="refresh"
						color="primary"
						onPress={() => window.location.reload()}
					>
						刷新
					</Button>,
				]}
			/>
		</div>
	);
};

export default NotFound;
