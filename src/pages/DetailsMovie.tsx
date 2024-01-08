import React from 'react';

import Header from '../components/Header';
import BannerMovie, { BannerMovieProps } from '../components/BannerMovie';
import { useLoaderData } from 'react-router-dom';

interface UseLoaderData {
  details: Omit<BannerMovieProps, 'credits' | 'screenPlay'>;
}

const DetailsMovie: React.FC = () => {
  const { details } = useLoaderData() as UseLoaderData

  return (
    <>
      <Header />
      <BannerMovie
        avaliation={details.avaliation}
        credits={[{ type: 'Director', name: 'Ator 1' },{ type: 'Director', name: 'Ator 1' }]}
        imageUrl={details.imageUrl}
        overview={details.overview}
        screenPlay={[{ type: 'Director', name: 'Ator 1' }]}
        subtitle={details.subtitle}
        title={details.title}
        key={1}
      />
    </>
  );
};

export default DetailsMovie;
