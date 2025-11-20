import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import compress from 'astro-compress';

import react from '@astrojs/react';
import astrowind from './vendor/integration/index.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    astrowind(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap({
      filter: (page) => !page.includes('/_'),
      lastmod: new Date(),
      serialize(item) {
        return item;
      }
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': ['template', 'gallery', 'approval', 'document', 'advertising', 'currency-exchange', 'voice-presentation', 'business-contact', 'database']
      }
    }),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: false,
      SVG: false
    })
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        'astrowind': path.resolve(__dirname, '.')
      }
    }
  }
});