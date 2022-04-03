import { Box, Flex, Icon, Link } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

const GitHubLink = () => {
  return (
    <Flex
      as={Link}
      align="center"
      href="https://github.com/jondotblack/jon.black"
      isExternal
      justify="space-between"
      textStyle="default"
      w="100%"
    >
      <span>
        This site is open source <strong>on GitHub</strong>
      </span>
      <Icon as={FiArrowUpRight} ml={1} />
    </Flex>
  );
};

export default GitHubLink;
