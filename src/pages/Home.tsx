import React from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Movies from '../components/Movies';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Movies />
    </>
  );
};

export default Home;
