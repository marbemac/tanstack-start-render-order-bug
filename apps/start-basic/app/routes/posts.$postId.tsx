import { ErrorComponent, Link, createFileRoute } from "@tanstack/react-router";
import { fetchPost } from "../utils/posts";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { NotFound } from "~/components/NotFound";
import { useEffect } from "react";
import { useTextContext } from "~/providers";
import { observer } from "mobx-react-lite";

export const Route = createFileRoute("/posts/$postId")({
  component: PostRoute,
});

function PostRoute() {
  return (
    <div className="space-y-2">
      <TextToggle />
    </div>
  );
}

const TextToggle = observer(() => {
  const store = useTextContext();

  console.log("PostRoute.render", store.showText);
  useEffect(() => {
    console.log("PostRoute.mount");
  }, []);

  return (
    <>
      <button
        onClick={() => store.setShowText(!store.showText)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {store.showText ? "Hide Text" : "Show Text"}
      </button>

      {store.showText && <p className="mt-4 italic">some random text</p>}
    </>
  );
});
