/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn4.vectorstock.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "simicart.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "uizard.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bootstrapmade.com",
        pathname: "/**",
      },
       {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig

