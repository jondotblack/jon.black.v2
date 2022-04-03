import { ReactFragment } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { Link as Anchor } from '@chakra-ui/react';

interface AnchorProps extends LinkProps {
  children: ReactFragment;
  isExternal?: boolean;
  passHref?: boolean;
  sx?: object;
  variant?: string;
}

const Link = ({
  children,
  href,
  isExternal = false,
  passHref = true,
  sx,
  variant,
}: AnchorProps) => {
  return (
    <NextLink href={href} passHref={passHref}>
      <Anchor isExternal={isExternal} sx={sx} variant={variant}>
        {children}
      </Anchor>
    </NextLink>
  );
};

export default Link;
