import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("posts", [
    layout("./routes/posts.tsx", [
      route(":pid", "./routes/post.tsx"),
    ]),
  ])
] satisfies RouteConfig;
