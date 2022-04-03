export const linkTheme = {
  Link: {
    variants: {
      default: {},
      underline: {
        textDecoration: 'underline',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
    defaultProps: {
      variant: 'default',
    },
  },
};
