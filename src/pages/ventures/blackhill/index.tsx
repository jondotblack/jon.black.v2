import type { NextPage } from 'next';
import {
  Box,
  Center,
  DarkMode,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { getColSpan } from 'utils';

import { Banner, Section } from 'components/content';
import { Layout } from 'components/layout';
import { BlockLink } from 'components/link';

const BlackHillPage: NextPage = () => {
  return (
    <DarkMode>
      <Layout bgColor="rockBottom" seo={{ title: 'Black Hill Farm' }}>
        <Banner>
          <Stack align="center" direction={{ base: 'column', md: 'row' }} spacing={2}>
            <Box w={{ base: getColSpan(12), lg: getColSpan(5) }}>
              <Image
                alt="Black Hill Farm"
                mx="auto"
                w={{ base: '300px', md: 'full' }}
                objectFit="cover"
                src="/black-hill-logo-primary.png"
              />
            </Box>
            <Box w={{ base: getColSpan(12), lg: getColSpan(7) }}>
              <Text textStyle="lead" mt={1}>
                A small farm located on six-acres in western New Jersey. We grow a diverse range of
                crops, from heirloom tomatoes to medicinal herbs, experimenting with organic and
                regenerative practices that prioritize soil health, biodiversity, and well-being of
                our community.
              </Text>
            </Box>
          </Stack>
        </Banner>

        <Section>
          <BlockLink
            href="https://www.bedminster.us/services/farmers_market"
            text="Find us at the market every other Saturday starting 5/25 "
            isExternal
          />
          <BlockLink href="mailto:hello@blackhill.farm" text="Become a partner" isExternal />
          <BlockLink
            href="https://www.instagram.com/blackhill.farm/"
            text="Follow us on Instagram"
            isExternal
          />
        </Section>
      </Layout>
    </DarkMode>
  );
};

export default BlackHillPage;
