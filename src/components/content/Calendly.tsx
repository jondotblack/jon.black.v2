import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { InlineWidget } from 'react-calendly';

interface BannerProps {
  children?: ReactNode;
  url?: string;
}

const Calendly = ({ children, url = 'https://calendly.com/jondotblack/30min' }: BannerProps) => {
  return (
    <Box>
      {children}

      <InlineWidget
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '40413b',
        }}
        styles={{
          height: '1000px',
        }}
        url={url}
      />
    </Box>
  );
};

export default Calendly;
