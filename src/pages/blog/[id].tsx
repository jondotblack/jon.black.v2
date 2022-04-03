import { GetServerSideProps, NextPage } from 'next';
import { Heading, Spinner } from '@chakra-ui/react';
import { Banner, Notion, Section } from 'components/content';
import { Layout } from 'components/layout';
import { getBlogPost } from 'lib/notion';

interface BlogPostProps {
  post: {
    title: string;
    content: any;
  };
}

const BlogPostPage: NextPage<BlogPostProps> = ({ post }) => {
  const { title, content } = post;

  return (
    <Layout bgColor="swissCoffee" seo={{ title }}>
      {!post ? (
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query?.id as string;
  const database = await getBlogPost(id);

  return {
    props: {
      post: database,
    },
  };
};

export default BlogPostPage;
