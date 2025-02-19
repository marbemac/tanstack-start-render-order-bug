import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  console.log("Home.render");

  useEffect(() => {
    console.log("Home.mount");
  }, []);

  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
    </div>
  );
}
