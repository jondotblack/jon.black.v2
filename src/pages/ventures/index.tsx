import type { NextPage } from 'next';
import { Heading } from '@chakra-ui/react';
import { Banner, Section } from 'components/content';
import { Layout } from 'components/layout';
import { BlockLink } from 'components/link';
import { ActiveVentureList, GraveyardVentureList } from 'lib/data';

const VenturesPage: NextPage = () => {
  return (
    <Layout bgColor="verde" seo={{ title: 'Ventures' }}>
      <Banner>
        <Heading>
          I am an entrepreneur at heart. I know the rush of taking an idea and turning it into a
          revenue-generating business. I know the grind of bootstrapping to keep it going. I know
          what it feels like to fail. But above all, I know that all that experience just carries
          over to the next venture.
        </Heading>
        <Heading mt={10}>
          I&apos;m interested in other mission-driven businesses that share my values. Technical or
          product roles are ideal. I&apos;m also an angel investor for those seeking funding of
          under &#60; $10k.
        </Heading>
        <Heading mt={10}>
          Areas of interest are food &amp; beverage, fashion, health &amp; wellness, music &amp;
          entertainment.
        </Heading>
      </Banner>

      <Section heading="Ongoing">
        {ActiveVentureList.map(({ description, href, text }) => (
          <BlockLink description={description} href={href} text={text} key={`venture_${text}`} />
        ))}
      </Section>

      <Section heading="Graveyard">
        {GraveyardVentureList.map(({ description, href, text }) => (
          <BlockLink description={description} href={href} text={text} key={`venture_${text}`} />
        ))}
      </Section>
    </Layout>
  );
};

export default VenturesPage;
