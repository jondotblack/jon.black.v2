import { Box, Flex, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import { GitHubLink } from 'components/link';
import { Newsletter } from 'components/newsletter';
import { getColSpan } from 'utils';

const Footer = () => {
  return (
    <Flex pt={12} pb={14}>
      <Box w={{ sm: getColSpan(12), lg: getColSpan(9) }} ml={{ sm: 0, lg: getColSpan(3) }}>
        <Flex direction={{ base: 'column', lg: 'row' }}>
          <Stack direction="column" w={{ base: getColSpan(12), lg: getColSpan(6) }} spacing={4}>
            <Box>
              <Link href="https://instagram.com/jondotblack" textStyle="heavy">
                Instagram
              </Link>
            </Box>
            <Box>
              <Link href="https://angel.co/u/jondotblack" textStyle="heavy">
                AngelList
              </Link>
            </Box>
            <Box>
              <Link href="https://workingnotworking.com/1823-jonathan" textStyle="heavy">
                WorkingNotWorking
              </Link>
            </Box>
            <Box>
              <Link href="https://www.linkedin.com/in/jontblack/" textStyle="heavy">
                LinkedIn
              </Link>
            </Box>
          </Stack>

          <Box w={{ base: getColSpan(12), lg: getColSpan(6) }}>
            <Newsletter />
            <GitHubLink />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
