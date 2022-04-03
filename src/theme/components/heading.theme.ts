export const headingTheme = {
  Heading: {
    variants: {
      default: {},
      primary: {
        fontSize: () => ({ base: '1.75rem', lg: '2.5rem' }),
        fontWeight: 'normal',
      },
      secondary: {
        fontFamily: 'body',
        fontSize: () => ({ base: '1.25rem', lg: '2rem' }),
        fontWeight: 'normal',
      },
    },
    defaultProps: {
      variant: 'primary',
    },
  },
};
