/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_RAPID_API_HOST: process.env.REACT_APP_RAPID_API_HOST,
    REACT_APP_RAPID_API_KEY: process.env.REACT_APP_RAPID_API_KEY,
    REACT_APP_RAPID_API_URL: process.env.REACT_APP_RAPID_API_URL,
  },
  // experimental: {
  //   concurrentFeatures: false, // <- Turn this option to false
  //   serverComponents: true,
  // },
};

module.exports = nextConfig;
