/** @type {import('next').NextConfig} */
const nextConfig = {
  // When true, React will help identify potential problems during development
  reactStrictMode: true,

  // Image configuration - controls which external image sources are allowed
  images: {
    // List of external domains that you can load images from using the Next.js Image component
    // For example, if you want to display images from "example.com", add it to this list
    // Images stored in your project's "public" folder don't need to be listed here
    domains: ["placeholder.com"],
  },
};

export default nextConfig;
