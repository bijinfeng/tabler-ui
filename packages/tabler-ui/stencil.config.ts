import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'tabler',
  globalStyle: 'style/global.css',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@kebai/tabler-ui',
      proxiesFile: '../tabler-react/src/components.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@kebai/tabler-ui',
      proxiesFile: '../tabler-vue/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: './dist/custom-elements',
    },
  ],
};
