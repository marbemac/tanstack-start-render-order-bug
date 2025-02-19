import { useEffect } from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  console.log("Providers.render");

  useEffect(() => {
    console.log("Providers.mount");
  }, []);

  return children;
};
