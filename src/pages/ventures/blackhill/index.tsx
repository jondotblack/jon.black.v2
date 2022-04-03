import type { NextPage } from 'next';
import { Box, DarkMode, Heading, Text } from '@chakra-ui/react';

import { Banner, Section } from 'components/content';
import { Layout } from 'components/layout';
import { BlockLink } from 'components/link';

const BlackHillPage: NextPage = () => {
  return (
    <DarkMode>
      <Layout bgColor="rockBottom" seo={{ title: 'Black Hill Farm' }}>
        <Banner>
          <Box>
            <Heading fontSize="5xl">black hill farm</Heading>
            <Heading fontSize="3xl">
              Hill & Dale Road
              <br />
              Tewksbury, NJ 08833
            </Heading>
            <Heading fontSize="4xl" mt={8}>
              Stay. Eat. Gather. Explore. Recover.
            </Heading>
            <Text textStyle="lead" mt={1}>
              In March 2020, I started the process of renovating a six-acre foreclosed farm in
              western New Jersey. After 18 months the property, it is ready for guests and events.
            </Text>
          </Box>
        </Banner>

        <Section>
          <BlockLink
            href="https://www.exploretock.com/blackhillfarm"
            text="Upcoming events"
            isExternal
          />
          <BlockLink href="mailto:hello@blackhill.farm" text="Make a reservation" isExternal />
          <BlockLink href="mailto:hello@blackhill.farm" text="Become a partner" isExternal />
          <BlockLink href="/ventures/blackhill/handbook" text="Read our guest handbook" />
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
