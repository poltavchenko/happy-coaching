import vituum from 'vituum';
import { defineConfig } from 'vite';
import posthtml from '@vituum/vite-plugin-posthtml';
import posthtmlModules from 'posthtml-modules';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

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
          root: './src',
          attribute: 'src',
          attributeAsLocals: true,
        }),
      ],
    }),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
              },
              cleanupIDs: {
                minify: false,
                remove: false,
              },
              convertPathData: false,
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
        quality: 80,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
      },
      cache: false,
      cacheLocation: undefined,
    }),
  ],
});
