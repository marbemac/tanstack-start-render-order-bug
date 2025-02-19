import { useEffect } from "react";

export default function Post() {
  console.log("Post.render");
  useEffect(() => {
    console.log("Post.mount");
  }, []);

  return <div>The post</div>;
}
