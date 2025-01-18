// next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's CDN domain here
  },
};

export default config;
