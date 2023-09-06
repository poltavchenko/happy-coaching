import vituum from 'vituum';
import { defineConfig } from 'vite';
import posthtml from '@vituum/vite-plugin-posthtml';
import viteImagemin from 'vite-plugin-imagemin';
import posthtmlModules from 'posthtml-modules';

export default defineConfig({
  publicDir: false,
  root: './',
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: 'dist',
    minify: false,
    cssMinify: false,
    sourcemap: false,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          '*.scss': 'src/styles',
        },
      },
    }),
    posthtml({
      root: './src',
      plugins: [
        posthtmlModules({
          attribute: 'src',
          attributeAsLocals: true,
        }),
      ],
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      webp: {
        quality: 90,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 90,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
});
