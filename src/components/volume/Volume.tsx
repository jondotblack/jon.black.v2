import { Box, Spinner } from '@chakra-ui/react';

interface TrackProps {
  volume: any;
}

const Volume = ({ volume, ...rest }: TrackProps) => {
  const name = volume.name;
  const spotifyId = volume.spotifyId;

  // if no spotifyId then do not render
  if (!spotifyId) {
    return null;
  }

  return (
    <Box {...rest} position="relative">
      {/* use a spinner placeholder while iframe loads */}
      <Spinner position="absolute" top="0" zIndex={0} />

      <Box position="relative" zIndex={1}>
        <iframe
          src={`https://open.spotify.com/embed/playlist/${spotifyId}`}
          width="100%"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          title={name}
        />
      </Box>
    </Box>
  );
};

export default Volume;
