import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { fetchPosts } from "../utils/posts";
import { useEffect } from "react";

export const Route = createFileRoute("/posts")({
  component: PostsComponent,
});

function PostsComponent() {
  console.log("PostsLayout.render");
  useEffect(() => {
    console.log("PostsLayout.mount");
  }, []);

  return (
    <div className="p-2 flex gap-2">
      <h1>Posts</h1>
      <hr />
      <Outlet />
    </div>
  );
}
