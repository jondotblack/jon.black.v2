import { ReactFragment } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { getColSpan } from 'utils';

interface BannerProps {
  children: ReactFragment;
  heading?: string;
}

const Section = ({ children, heading }: BannerProps) => {
  return (
    <Flex direction={{ base: 'column', lg: 'row' }} justify="space-between" py={8}>
      <Box mb={6}>
        <Heading variant="secondary">{heading}</Heading>
      </Box>
      <Box w={{ base: getColSpan(12), lg: getColSpan(9) }}>{children}</Box>
    </Flex>
  );
};

export default Section;
