import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import axios from "axios";

type PostId = {
	postId: string;
};

export const fetchPost = createServerFn({ method: "GET" })
	.validator((d: PostId) => d)
	.handler(async ({ data }) => {
		const post = await axios
			.get(`https://jsonplaceholder.typicode.com/posts/${data.postId}`)
			.then((r) => r.data)
			.catch((err) => {
				console.error(err);
				if (err.status === 404) {
					throw notFound();
				}
				throw err;
			});

		return post;
	});
export const fetchPosts = createServerFn({ method: "GET" }).handler(
	async () => {
		console.info("Fetching posts...");
		return axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((r) => r.data.slice(0, 10));
	},
);
