import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/assets/:all*",
        headers: [
          {
            key: "Content-Type",
            value: "model/gltf-binary",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
