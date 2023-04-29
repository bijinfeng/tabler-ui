// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import { ComponentLibrary } from '@kebai/tabler-vue';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.use(ComponentLibrary);
  },
};
