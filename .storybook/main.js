/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../packages/**/*.mdx", "../packages/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-styling",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {},
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      postCss: true,
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
