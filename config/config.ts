import { defineConfig, IConfig } from 'dumi';

export default defineConfig({
  title: 'tabler',
  logo: 'https://preview.tabler.io/favicon.ico',
  mode: 'site',
  resolve: {
    includes: ['docs', 'packages/tabler-react']
  },
  alias: {
    '@kebai/tabler-react': process.cwd() + "/packages/tabler-react/src",
    "@kebai/tabler-ui": process.cwd() + "/packages/tabler-ui",
  },
  dynamicImportSyntax: {},
  ignoreMomentLocale: true,
  outputPath: "docs-dist",
  base: process.env.NODE_ENV === 'production' ? '/tabler-ui/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/tabler-ui/' : '/',
} as IConfig);
