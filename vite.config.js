import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      '0.0.0.0',  
      'localhost',
      '127.0.0.1',
    ],
  },
});