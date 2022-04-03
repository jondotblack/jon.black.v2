import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './foundations/breakpoints.theme';
import { colors } from './foundations/colors.theme';
import { textStyles, typography } from './foundations/typography.theme';

import { buttonTheme } from './components/button.theme';
import { headingTheme } from './components/heading.theme';
import { layerStylesTheme } from './foundations/layerStyles.theme';
import { linkTheme } from './components/link.theme';
import { inputTheme } from './components/input.theme';

import { globalStyles } from './foundations/global.theme';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,

  // foundational
  breakpoints,
  colors,
  ...layerStylesTheme,
  ...textStyles,
  ...typography,

  // global styling
  styles: {
    ...globalStyles,
  },

  // component specific theming
  components: {
    ...buttonTheme,
    ...headingTheme,
    ...inputTheme,
    ...linkTheme,
  },
  semanticTokens: {
    'page-text-color': colors.seed,
    'page-bg-color': colors.swissCoffee,
    'breakpoint-sm': breakpoints.sm,
    'breakpoint-md': breakpoints.md,
    'breakpoint-lg': breakpoints.lg,
    'breakpoint-xl': breakpoints.xl,
  },
};

export const theme = extendTheme({ ...config });
