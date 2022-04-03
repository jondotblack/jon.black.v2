import type { NextPage } from 'next';
import { Heading, Link, Text } from '@chakra-ui/react';
import { Banner, Calendly, Section } from 'components/content';
import { Layout } from 'components/layout';

const ContactPage: NextPage = () => {
  return (
    <Layout seo={{ title: 'Contact' }}>
      <Banner>
        <Heading>
          For new business inquiries, coaching, mentorship - anything you&apos;d like to discuss,
          you can find me on{' '}
          <Link href="https://www.linkedin.com/in/jontblack/" variant="underline">
            LinkedIn
          </Link>{' '}
          or{' '}
          <Link href="mailto:hello@jon.black" variant="underline">
            hello@jon.black
          </Link>
          .
        </Heading>
      </Banner>

      <Section heading="Office Hours">
        <Calendly>
          <Text textStyle="lead" mb={{ base: 12, md: 0 }}>
            I&apos;ve been fortunate to have great mentors and friends who were always willing to
            answer any questions or show me the right way to do things. I’m also a big believer in
            paying it forward. Office hours are free and open to anyone to schedule. If you need
            help fleshing out ideas, working through a problem, having trouble with an employee,
            book a time below.
          </Text>
        </Calendly>
      </Section>
    </Layout>
  );
};

export default ContactPage;
