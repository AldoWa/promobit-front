import React from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Movies from '../components/Movies';

import { GenresProvider } from '../context/genresContext';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <GenresProvider>
        <Banner />
        <Movies />
      </GenresProvider>
    </>
  );
};

export default Home;
