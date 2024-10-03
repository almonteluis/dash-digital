/** @type {import('next').NextConfig} */

const nextConfig = {
  // experimental: {
  //   ppr: "incremental",
  // },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
