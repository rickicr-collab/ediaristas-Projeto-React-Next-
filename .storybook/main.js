/** @type { import('@storybook/nextjs').StorybookConfig } */

const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path); // Adiciona o caminho para a pasta src

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],

  staticDirs: ['../public'], // Adiciona a pasta public para servir arquivos estáticos
  webpackFinal: async(config) => {
    config.resolve.modules.push(toPath('src')); // Adiciona a pasta src ao resolver de módulos
    config.resolve.alias['@emotions/core'] = toPath('node_modules/@emotion/react'); // Corrige o caminho para o módulo @emotion/react
    config.resolve.alias['@emotions/styled'] = toPath('node_modules/@emotion/styled');
    config.resolve.alias['@emotions/theming'] = toPath('node_modules/@emotion/react');
    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
