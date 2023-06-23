import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const REACT_PARAMS = {
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          displayName: true,
          fileName: false,
        },
      ],
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(REACT_PARAMS), tsconfigPaths()],
});
