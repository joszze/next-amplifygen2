/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverComponentsPackages: ["@aws-crypto"] },
};

export default nextConfig;
