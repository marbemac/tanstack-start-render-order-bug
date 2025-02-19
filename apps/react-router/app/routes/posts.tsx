import { useEffect } from "react";
import { Outlet } from "react-router";

export default function PostsLayout() {
  console.log("PostsLayout.render");

  useEffect(() => {
    console.log("PostsLayout.mount");
  }, []);

  return (
    <div>
      <aside>Posts</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
