import type { NextPage } from 'next';
import { Heading } from '@chakra-ui/react';
import { Banner, Section } from 'components/content';
import { Layout } from 'components/layout';
import { BlockLink, Link } from 'components/link';
import { ClientList } from 'lib/data';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Banner>
        <Heading>
          Jon Black - currently consulting for{' '}
          <Link href="https://www.heatwaves.co/" variant="underline">
            Heat Waves
          </Link>{' '}
          product agency. Former CTO and VP of Engineering with extensive team management
          experience. Specializing in startup consultation, coaching entrepreneurs and executives.
          Owner of{' '}
          <Link href="https://blackhill.farm" variant="underline">
            Black Hill Farm
          </Link>{' '}
          and co-founder of{' '}
          <Link href="https://communal.works" variant="underline">
            communal.works
          </Link>
          .
        </Heading>
        <Heading mt={10}>
          If you&apos;re interested in working together - you can find me on{' '}
          <Link href="https://www.linkedin.com/in/jontblack/" variant="underline">
            LinkedIn
          </Link>{' '}
          or{' '}
          <Link href="mailto:hello@jon.black" variant="underline">
            email
          </Link>
          . Free{' '}
          <Link href="/office-hours" variant="underline">
            office hours
          </Link>{' '}
          every Tuesday afternoon for informal chats.
        </Heading>
      </Banner>

      <Section heading="Select clients">
        {ClientList.map(({ name, url, isExternal }) => (
          <BlockLink
            href={url}
            text={name}
            isExternal={isExternal || false}
            key={`client_${name}`}
          />
        ))}
      </Section>
    </Layout>
  );
};

export default HomePage;
