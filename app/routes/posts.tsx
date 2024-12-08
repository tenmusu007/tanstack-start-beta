import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchPosts } from "../posts";

export const Route = createFileRoute("/posts")({
	loader: async () => fetchPosts(),
	component: RouteComponent,
});

function RouteComponent() {
	const posts = Route.useLoaderData();
	console.log(posts);

	return (
		<>
			<div>Hello "/posts"!</div>
			{posts.map((post) => (
				<div key={post.id}>
					<h2>
						<Link
							to="/posts/$postId"
							params={{
								postId: post.id,
							}}
						>
							{post.title}
						</Link>
					</h2>
				</div>
			))}
		</>
	);
}
