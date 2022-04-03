import { ReactNode } from 'react';
import { LinkProps } from 'next/link';
import { Box, Icon, Text } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from './Link';

interface BlockLinkProps extends LinkProps {
  description?: string;
  isExternal?: boolean;
  text?: string | ReactNode;
}

const BlockLink = ({ description, isExternal = false, href, text }: BlockLinkProps) => {
  return (
    <Box
      _last={{ borderBottom: '1px solid' }}
      borderTop="1px solid"
      fontSize="4xl"
      py={4}
      key={`client_${text}`}
    >
      {href ? (
        <Link
          href={href}
          isExternal={isExternal}
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <span>{text}</span> <Icon as={FiArrowUpRight} />
        </Link>
      ) : (
        <Text as="div">{text}</Text>
      )}

      {description && <Text>{description}</Text>}
    </Box>
  );
};

export default BlockLink;
