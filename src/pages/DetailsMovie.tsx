import React from 'react';

import Header from '../components/Header';
import BannerMovie from '../components/BannerMovie';

const DetailsMovie: React.FC = () => {
  return (
    <>
      <Header />
      <BannerMovie
        avaliation={50}
        credits={[{ type: 'Director', name: 'Ator 1' },{ type: 'Director', name: 'Ator 1' }]}
        imageUrl='https://image.tmdb.org/t/p/original/3CezGI4ORSgVKk5Ch3UUWtL7SET.jpg'
        overview='Lorem ipsum dolor sit amet'
        screenPlay={[{ type: 'Director', name: 'Ator 1' }]}
        subtitle='16 anos  • 11/02/2016 (BR)  •  Ação, Aventura, Comédia, Ficção científica • 1h 47m'
        title='Filme 1'
        key={1}
      />
    </>
  );
};

export default DetailsMovie;
