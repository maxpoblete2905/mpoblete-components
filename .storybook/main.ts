import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    '@storybook/addon-docs',
    "@storybook/addon-actions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    config.resolve!.alias = {
      "@components": path.resolve(__dirname, "../src/components"),
      "@icon": path.resolve(__dirname, "../src/icon"),
      "@mock": path.resolve(__dirname, "../src/mock"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      process: "process/browser",
    };
    config.define = config.define || {};
    config.define["process.env"] = {};

    return config;
  },
};
export default config;
