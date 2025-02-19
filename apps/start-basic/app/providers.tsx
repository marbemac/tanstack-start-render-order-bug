import { useEffect } from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log("Providers.mount");
  }, []);

  return children;
};
