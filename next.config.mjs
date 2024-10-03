/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable React Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "volvrit.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
