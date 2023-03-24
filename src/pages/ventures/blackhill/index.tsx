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
            <Heading fontSize="5xl">Black Hill Farm</Heading>
            <Heading fontSize="3xl">
              Hill & Dale Road
              <br />
              Tewksbury, NJ 08833
            </Heading>
            <Heading fontSize="4xl" mt={8}>
              Stay. Eat. Gather. Explore. Recover.
            </Heading>
            <Text textStyle="lead" mt={1}>
              A small homestead located on six-acres in western New Jersey. We grow a diverse range
              of crops, from heirloom tomatoes to medicinal herbs, using organic and regenerative
              practices that prioritize soil health, biodiversity, and well-being of our community.
            </Text>
          </Box>
        </Banner>

        <Section>
          {/* Asked to temporarily disabled
            <BlockLink
              href="https://www.exploretock.com/blackhillfarm"
              text="Upcoming events"
              isExternal
            /> 
          */}
          <BlockLink
            href="https://www.airbnb.com/rooms/50506944"
            text="Make a reservation"
            isExternal
          />
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
