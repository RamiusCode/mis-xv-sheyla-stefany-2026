// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: poner aquí la dirección final de Vercel, ej: site: 'https://mis-xv-sheyla.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});
