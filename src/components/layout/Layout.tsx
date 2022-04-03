import { ReactNode, useEffect } from 'react';
import { NextSeo } from 'next-seo';

import { Box, Container, useColorMode } from '@chakra-ui/react';
import { StatusBar } from 'components/statusBar';
import { constants, setColorToken } from 'utils';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  bgColor?: string;
  children: ReactNode;
  seo?: {
    title: string;
  };
}

const Layout = ({ bgColor = 'crema', children, seo }: LayoutProps) => {
  const { colorMode } = useColorMode();
  const { title } = seo || {};
  const { TEXT_COLOR_TOKEN } = constants;

  useEffect(() => {
    const textColor = colorMode === 'dark' ? 'swissCoffee' : 'seed';

    setColorToken(bgColor);
    setColorToken(textColor, TEXT_COLOR_TOKEN);
  }, [bgColor, colorMode, TEXT_COLOR_TOKEN]);

  const pageTitle = title ? `${title} | ` : '';

  return (
    <>
      <NextSeo
        title={`${pageTitle}jon.black`}
        description="Jon Black - a creator with a technical mind. I consult for startups, coach entrepreneurs, and build digital products."
      />

      <StatusBar />

      <Container
        maxW="container.xl"
        pl={{ base: '2rem', lg: '104px', xl: '2rem' }}
        pr={{ base: '2rem' }}
        overflowX="hidden"
      >
        <Header />

        <Box as="main" pt={{ base: 4, lg: 0 }}>
          {children}
        </Box>

        <Footer />
      </Container>
    </>
  );
};

export default Layout;
