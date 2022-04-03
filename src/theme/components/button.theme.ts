import { mode, SystemStyleFunction } from '@chakra-ui/theme-tools';

const defaultStyle: SystemStyleFunction = (props) => ({
  align: 'center',
  border: '1px solid',
  borderColor: 'transparent',
  fontSize: '1.125rem',
  lineHeight: '1',
  height: '48px',
  paddingTop: '4px', // used to offset custom font center alignment
  textTransform: 'uppercase',
  borderRadius: '24px',
  _active: {
    bg: 'none',
  },
  _hover: {
    bg: 'none',
    borderColor: mode(`gray.900`, `swissCoffee`)(props),
  },
  _focus: {
    bg: 'none',
  },
});

export const buttonTheme = {
  Button: {
    variants: {
      outline: (props: any) => ({
        ...defaultStyle(props),
      }),
      active: (props: any) => ({
        ...defaultStyle(props),
        borderColor: mode(`gray.900`, `swissCoffee`)(props),
      }),
      inline: (props: any) => ({
        ...defaultStyle(props),
        border: 0,
        height: '24px',
      }),
    },
  },
};
