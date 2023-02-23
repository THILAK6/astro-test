import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: cloudflare()
});