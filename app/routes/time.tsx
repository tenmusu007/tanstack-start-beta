import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { serverTime } from "../utils/getServerTime";

// const getServerTime = createServerFn().handler(async () => {
// 	// Wait for 1 second
// 	await new Promise((resolve) => setTimeout(resolve, 1000));
// 	// Return the current time
// 	return new Date().toISOString();
// });
export const Route = createFileRoute("/time")({
	component: RouteComponent,
	loader: async () => await serverTime(),
});

function RouteComponent() {
	const state = Route.useLoaderData();
	return (
		<div>
			Hello "/time"!
			<strong>{state}</strong>
		</div>
	);
}
