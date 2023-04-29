import { defineConfig } from 'vitepress';
import path from 'path';
import { demoBlockPlugin } from 'vitepress-theme-demoblock';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '基础',
        items: [
          { text: '安装', link: '/guild/installation' },
          { text: '快速开始', link: '/guild/quickstart' },
        ],
      },
      // {
      //   text: '进阶',
      //   items: [
      //     { text: 'xx', link: '/xx' },
      //   ],
      // },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin);
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: '@kebai/tabler-vue',
          replacement: path.resolve(__dirname, '../../packages/tabler-vue/src'),
        },
        {
          find: '@kebai/tabler-ui',
          replacement: path.resolve(__dirname, '../../packages/tabler-ui'),
        },
      ],
    },
  },
});
