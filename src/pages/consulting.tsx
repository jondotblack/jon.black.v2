import type { NextPage } from 'next';
import { Heading, Text } from '@chakra-ui/react';
import { Banner, Calendly, Section } from 'components/content';
import { Layout } from 'components/layout';

const ConsultingPage: NextPage = () => {
  return (
    <Layout bgColor="azul" seo={{ title: 'Consulting' }}>
      <Banner>
        <Heading>
          Building a new business or product is nerve wracking. There&apos;s a ton to consider, many
          unknowns, and some no-turning-backs. Plus a lot of eyes (or worse, no eyes). I&apos;ve
          been there.
        </Heading>
        <Heading mt={10}>
          I&apos;ve been there as an entrepreneur, I&apos;ve been there as a developer, I&apos;ve
          been there as a team leader. And the good news is, I can help. From foundational strategy
          and prototyping, to ecommerce and growth, I can bring insight in at any stage to help you
          reach your goals.
        </Heading>
      </Banner>

      <Section heading="Coaching">
        <Text textStyle="lead">
          I&apos;ve made a number of mistakes, but learned a ton from them. I get excited about
          sharing my stories, both my successes and failures. For those who want a source of
          consistent honest feedback, to talk through complex problems, to vent frustrations to - I
          offer coaching services on a recurring basis.
        </Text>
      </Section>

      <Section heading="Office Hours">
        <Text textStyle="lead">
          I&apos;ve been fortunate to have great mentors and friends who were always willing to
          answer any questions or show me the right way to do things. I&apos;m also a big believer
          in paying it forward. Office hours are free and open to anyone to schedule. If you need
          help fleshing out ideas, working through a problem, having trouble with an employee, book
          a time below.
        </Text>
        <Calendly />
      </Section>
    </Layout>
  );
};

export default ConsultingPage;
