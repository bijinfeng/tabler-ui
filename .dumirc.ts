// .dumirc.ts
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'tabler',
  logo: 'https://preview.tabler.io/favicon.ico',
  resolve: {
    docDirs: ['docs']
  },
  alias: {
    '@kebai/tabler-react': process.cwd() + "/packages/tabler-react/src",
    "@kebai/tabler-ui": process.cwd() + "/packages/tabler-ui",
  },
  ignoreMomentLocale: true,
});
