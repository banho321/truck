import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cloud.ba.pro.vn',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser'
    },
    server: {
      host: true,
      allowedHosts: 'all'
    },
    preview: {
      host: true,
      allowedHosts: 'all'
    }
  }
});
