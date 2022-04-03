import { ColorMode } from '@chakra-ui/react';
import { constants } from 'utils';

const { BG_COLOR_TOKEN, TEXT_COLOR_TOKEN } = constants;
interface GlobalStylesProps {
  colorMode?: ColorMode;
}

export const globalStyles = {
  global: ({ colorMode }: GlobalStylesProps) => ({
    'html, body': {
      color: `var(${TEXT_COLOR_TOKEN})`,
      backgroundColor: `var(${BG_COLOR_TOKEN})`,
      scrollBehavior: 'smooth',
    },
    p: {
      fontSize: 'var(--chakra-fontSizes-lg)',
      lineHeight: 'var(--chakra-lineHeights-7)',
    },
  }),
};
