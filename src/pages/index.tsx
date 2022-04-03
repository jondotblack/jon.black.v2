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
          Hi, I&apos;m Jon - currently VP of Engineering for IncludeHealth. I consult for startups,
          coach entrepreneurs, and own{' '}
          <Link href="/ventures/blackhill" variant="underline">
            Black Hill Farm
          </Link>
          .
        </Heading>
        <Heading mt={10}>
          For coaching, mentorship, or playing your mixtape - you can find me on{' '}
          <Link href="https://www.linkedin.com/in/jontblack/" variant="underline">
            LinkedIn
          </Link>{' '}
          or{' '}
          <Link href="mailto:hello@jon.black" variant="underline">
            email
          </Link>
          . Don&apos;t have anything specific, but just want to talk? I offer free{' '}
          <Link href="/office-hours" variant="underline">
            office hours
          </Link>{' '}
          every Tuesday afternoon.
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
