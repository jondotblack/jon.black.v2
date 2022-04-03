import { GetServerSideProps, NextPage } from 'next';
import { Heading } from '@chakra-ui/react';
import { Banner, Section } from 'components/content';
import { Layout } from 'components/layout';
import { BlockLink, Link } from 'components/link';
import { getBlogList } from 'lib/notion';

interface BlogListingProps {
  posts: [
    {
      id: string;
      title: string;
    }
  ];
}

interface DatabaseProps {
  id: string;
  properties?: any;
}

const BlogListingPage: NextPage<BlogListingProps> = ({ posts }) => {
  return (
    <Layout bgColor="rojo" seo={{ title: 'Blog' }}>
      <Banner>
        <Heading>
          I&apos;ve learned a lot over the years and want to share valuable lessons with those who
          are interested and can benefit. For this kind of thing, I prefer a bit more room than
          socials. Posts will generally revolve around front-end development, business strategy,
          art, and food technology.
        </Heading>
        <Heading mt={10}>
          If that sounds good to you, sign up for the monthly newsletter or follow me on{' '}
          <Link href="https://medium.com/@jon.black" variant="underline" isExternal>
            medium
          </Link>
          .
        </Heading>
      </Banner>

      <Section heading="Entries">
        {posts.map(({ id, title }) => (
          <BlockLink href={`/blog/${id}`} text={title} key={`blog_${id}`} />
        ))}
      </Section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const database = await getBlogList();

  const posts = database.map(({ id, properties }: DatabaseProps) => ({
    id,
    title: properties.Name.title[0].text.content,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default BlogListingPage;
