import { defineConfig } from 'vite';
import babel from '@rolldown/plugin-babel';
import react from '@vitejs/plugin-react';
import axye from 'axye/vite';

export default defineConfig({
  plugins: [
    babel({
      plugins: [
        ["@babel/plugin-proposal-decorators", { version: "2023-11" }]
      ]
    }),
    react(),

    axye()
  ]
});
