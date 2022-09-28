import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@kebai/tabler-ui/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
