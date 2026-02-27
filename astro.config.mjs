import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 替换成你的 GitHub Pages 完整地址
  site: 'https://kknolve.github.io',
  integrations: [mdx(), sitemap()],
});