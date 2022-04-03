import { GetServerSideProps } from 'next';
import { Heading, Spinner, Text } from '@chakra-ui/react';
import { Banner, Notion, Section } from 'components/content';
import { Layout } from 'components/layout';
import { getHandbook } from 'lib/notion';

interface HandbookProps {
  page: {
    title: string;
    content: any;
  };
}

const HandbookPage = ({ page }: HandbookProps) => {
  const { title, content } = page;

  return (
    <Layout bgColor="swissCoffee" seo={{ title: 'Black Hill Farm Handbook' }}>
      {!page ? (
        <Spinner />
      ) : (
        <>
          <Banner>
            <Heading>{title}</Heading>
          </Banner>

          <Section>
            <Notion content={content} />
          </Section>
        </>
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const database = await getHandbook();

  return {
    props: {
      page: database,
    },
  };
};

export default HandbookPage;
