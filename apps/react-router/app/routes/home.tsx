import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect } from "react";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  console.log("Home.render");

  useEffect(() => {
    console.log("Home.mount");
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/posts/123">Post</Link>
      </div>
    </div>
  );
}
