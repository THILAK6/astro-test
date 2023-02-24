import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: cloudflare({ mode: "directory" }),
  build: {
    staticHeaders: {
      '**/*.js': [
        {
          key: 'Cache-Control',
          value: 'public, max-age=300',
        },
      ],
      '**/*.css': [
        {
          key: 'Cache-Control',
          value: 'public, max-age=300',
        },
      ],
      '**/*.png': [
        {
          key: 'Cache-Control',
          value: 'public, max-age=300',
        },
      ],
    },
  },
});