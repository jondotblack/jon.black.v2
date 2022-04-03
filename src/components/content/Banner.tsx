import { ReactFragment } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { getColSpan } from 'utils';

interface BannerProps {
  children: ReactFragment;
}

const Banner = ({ children }: BannerProps) => {
  return (
    <Flex py={{ base: 2, lg: 8 }}>
      <Box w={{ base: getColSpan(12), lg: getColSpan(9) }} ml={{ base: 0, lg: getColSpan(3) }}>
        {children}
      </Box>
    </Flex>
  );
};

export default Banner;
