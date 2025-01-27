import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import compress from 'astro-compress';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: 'static',
<<<<<<< HEAD
  integrations: [
    tailwind({
      applyBaseStyles: false
    }), 
    sitemap(), 
    mdx(),
    icon({
      include: {
        tabler: ['*']
=======
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap({
    filter: (page) => !page.includes('/_'),
    lastmod: new Date(),
    serialize: (item) => ({
      ...item,
      lastmod: item.lastmod.toISOString(),
    }),
    customPages: [
      'https://cpmcalculator.online/sitemap.xml',
      'https://cpmcalculator.online/sitemap-0.xml'
    ]
  }), mdx(), icon({
    include: {
      tabler: ['*'],
      'flat-color-icons': ['template', 'gallery', 'approval', 'document', 'advertising', 'currency-exchange', 'voice-presentation', 'business-contact', 'database']
    }
  }), ...whenExternalScripts(() => partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })), compress({
    CSS: true,
    HTML: {
      'html-minifier-terser': {
        removeAttributeQuotes: false
>>>>>>> 1305458 (Update sitemap url)
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
        '~': path.resolve(__dirname, './src')
      }
    }
  }
});