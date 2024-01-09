import React from 'react';

import Header from '../components/Header';
import BannerMovie, { BannerMovieProps } from '../components/BannerMovie';
import { useLoaderData } from 'react-router-dom';
import Cast from '../components/Cast';
import { CreditsResponse } from '../types/axiosResponse';
import { Container, Heading } from '@chakra-ui/react';

interface UseLoaderData {
  details: Omit<BannerMovieProps, 'credits' | 'screenPlay'>;
  credits: CreditsResponse
}

const DetailsMovie: React.FC = () => {
  const { details, credits  } = useLoaderData() as UseLoaderData;

  return (
    <>
      <Header />
      <BannerMovie
        avaliation={details.avaliation}
        credits={[
          { type: 'Director', name: 'Ator 1' },
          { type: 'Director', name: 'Ator 1' },
        ]}
        imageUrl={details.imageUrl}
        overview={details.overview}
        screenPlay={[{ type: 'Director', name: 'Ator 1' }]}
        subtitle={details.subtitle}
        title={details.title}
        key={1}
      />
      <Container maxW='1250px' mt={74}>
        <Heading color='#131313' fontSize='1.75rem' fontWeight={700} lineHeight='2rem' mb={6}>Elenco original</Heading>
        <Cast
          items={credits.cast}
        />
      </Container>
    </>
  );
};

export default DetailsMovie;
