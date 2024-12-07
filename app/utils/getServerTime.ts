// getServerTime.ts
import { createServerFn } from "@tanstack/start";

export const serverTime = createServerFn({ method: "GET" }).handler(
	async () => {
		// Wait for 1 second
		await new Promise((resolve) => setTimeout(resolve, 1000));
		// Return the current time
		return new Date().toISOString();
	},
);
