/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ["i.dummyjson.com"],
  },
  auth0Domain: 'dev-ivrsttkny7wj2mab.us.auth0.com'
  // webpack: (config, { isServer }) => {
    
  //   // If client-side, don't polyfill `fs`
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       fs: false,
  //     };
  //   }

  //   return config;
  // },
};
