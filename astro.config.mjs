import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set when the site is published under a subpath, e.g. a GitHub Pages preview.
  base: process.env.BASE_PATH ?? '/',
});
