import { Box, Button, Flex, Icon, Stack, useDisclosure } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Link } from 'components/link';
import MobileMenu from './MobileMenu';

const navigation = [
  {
    href: '/consulting',
    label: 'Consulting',
  },
  {
    href: '/ventures',
    label: 'Ventures',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/mixtape',
    label: 'Mixtape',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const router = useRouter();
  const urlSegments = router.pathname.split('/');

  const isActive = (href: string) => {
    return href.indexOf(urlSegments[1]) !== -1 && router.pathname !== '/';
  };

  return (
    <>
      <Flex align="center" justify="space-between" py={{ base: 6, lg: 14 }}>
        <Box textStyle="logo">
          <Link href="/">Jon Black</Link>
        </Box>

        <Stack display={{ base: 'none', lg: 'flex' }} direction="row" spacing={6}>
          {navigation.map(({ href, label }) => (
            <NextLink href={href} passHref key={`nav_${label}`} legacyBehavior>
              <Button as="a" variant={isActive(href) ? 'active' : 'outline'}>
                {label}
              </Button>
            </NextLink>
          ))}
        </Stack>

        <Box display={{ base: 'inline-block', lg: 'none' }}>
          {isOpen ? (
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          ) : (
            <Button variant="outline" onClick={onOpen}>
              Menu
            </Button>
          )}
        </Box>
      </Flex>

      <MobileMenu isOpen={isOpen} onClose={onClose}>
        <Stack direction="column" spacing={6}>
          {navigation.map(({ href, label }) => (
            <NextLink href={href} passHref key={`nav_${label}`} legacyBehavior>
              <Button as="a" variant={isActive(href) ? 'active' : 'outline'}>
                {label}
              </Button>
            </NextLink>
          ))}
        </Stack>
      </MobileMenu>
    </>
  );
};

export default Header;
