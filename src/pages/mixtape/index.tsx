import { GetServerSideProps, NextPage } from 'next';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import { Banner, Section } from 'components/content';
import { Layout } from 'components/layout';
import { Link } from 'components/link';
import { Volume } from 'components/volume';
import { getMixtapeVolumes } from 'lib/notion';

interface MixtapesProps {
  mixtapes: [
    {
      id: string;
      name: string;
      spotifyId: string;
    }
  ];
}

interface DatabaseProps {
  id: string;
  properties?: any;
}

const MixtapePage: NextPage<MixtapesProps> = ({ mixtapes }) => {
  return (
    <Layout bgColor="morado" seo={{ title: 'Mixtape' }}>
      <Banner>
        <Heading>
          You can tell a lot about a person based on the music they listen to. As a new year&apos;s
          resolution in 2019, I started creating a 10 song &quot;mixtape&quot; for each month. There
          are no specific themes to the playlists, just a collection of what is on heavy rotation
          for the month or songs linked to a specific memory or moment in time.
        </Heading>
        <Heading mt={10}>
          I&apos;m always seeking new music so please{' '}
          <Link
            href="https://open.spotify.com/playlist/3IdDTJJgynlSCC1cBd192G?si=TSPMNhWvT_eEiEUjoH2EDA"
            variant="underline"
          >
            send me suggestions
          </Link>
          .
        </Heading>
      </Banner>

      <Section heading="Volumes">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {mixtapes.map((volume: any) => (
            <Volume volume={volume} key={`volume_${volume.id}`} />
          ))}
        </SimpleGrid>
      </Section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const database = await getMixtapeVolumes();

  const posts = database.map(({ id, properties }: DatabaseProps) => ({
    id,
    name: properties?.Name?.title[0]?.plain_text,
    spotifyId: properties['Spotify ID']?.rich_text[0]?.plain_text,
  }));

  return {
    props: {
      mixtapes: posts,
    },
  };
};

export default MixtapePage;
