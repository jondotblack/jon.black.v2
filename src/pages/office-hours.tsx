import type { NextPage } from 'next';
import { Heading } from '@chakra-ui/react';
import { Banner, Calendly, Section } from 'components/content';
import { Layout } from 'components/layout';

const OfficeHoursPage: NextPage = () => {
  return (
    <Layout bgColor="swissCoffee" seo={{ title: 'Office hours' }}>
      <Banner>
        <Heading>
          I&apos;ve been fortunate to have great mentors and friends who were always willing to
          answer any questions or show me the right way to do things. I&apos;m also a big believer
          in paying it forward. Office hours are free and open to anyone to schedule. If you need
          help fleshing out ideas, working through a problem, having trouble with an employee, book
          a time below.
        </Heading>
      </Banner>

      <Section>
        <Calendly />
      </Section>
    </Layout>
  );
};

export default OfficeHoursPage;
