import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `
          @use "/src/mixins" as *;
        `,
      },
    },
  },
  scss: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
