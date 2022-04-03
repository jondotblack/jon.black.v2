import { useOpenWeather } from 'react-open-weather';
import { Flex, Spacer, Icon, Spinner } from '@chakra-ui/react';

const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '';

const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: apiKey,
    lat: '40.681570',
    lon: '-74.775720',
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (errorMessage) {
    // TODO: add better error handling
    console.log('error', errorMessage);

    return null;
  }

  return (
    <Flex align="center" textStyle="default">
      Tewksbury, NJ
      <Spacer px={4} />
      {data?.current?.temperature?.current}&deg;
      <Spacer px={1} />
      {data?.current?.description}
      <Spacer px={4} />
      <Icon viewBox="0 -5 35 40" boxSize={9}>
        <path fill="currentColor" d={data?.current?.icon} />
      </Icon>
    </Flex>
  );
};

export default Weather;
