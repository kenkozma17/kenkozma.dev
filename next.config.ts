import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  ...(isDev
    ? {
        turbopack: {
          root: __dirname,
        },
      }
    : {}),
};

export default nextConfig;
