import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    config!.resolve!.alias = {
      ...(config?.resolve?.alias ?? {}),
      "@kebai/tabler-react": path.resolve(__dirname, '/packages/tabler-react/src'),
      "@kebai/tabler-vue": path.resolve(__dirname, '/packages/tabler-vue/src'),
      "@kebai/tabler-ui$": path.resolve(__dirname, '/packages/tabler-ui/dist'),
      "@kebai/tabler-ui/loader": path.resolve(__dirname, '/packages/tabler-ui/loader'),
    };
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
