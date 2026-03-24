/** @type { import('@storybook/react').Preview } */
import '../src/ui/styles/globals.css';
import StoryThemeProvider from '../src/ui/themes/StoryThemeProvider';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [StoryThemeProvider];
export default preview;
