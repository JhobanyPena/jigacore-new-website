/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    env: {
        PUBLIC_URL: "",
    },
};

export default nextConfig;
