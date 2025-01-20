// next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    domains: ['cdn.sanity.io','template-03-api.vercel.app'], // Add Sanity's CDN domain here
  },
};

export default config;
