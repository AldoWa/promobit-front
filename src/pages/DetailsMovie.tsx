import Header from '../components/Header';
import BannerMovie, { BannerMovieProps } from '../components/BannerMovie';
import { useLoaderData } from 'react-router-dom';
import Cast from '../components/Cast';
import { CreditsResponse, Movie } from '../types/index';
import { Container, Grid, Heading } from '@chakra-ui/react';
import Trailer from '../components/Trailer';
import MovieCard from '../components/MovieCard';

interface UseLoaderData {
  details: Omit<BannerMovieProps, 'credits' | 'screenPlay'>;
  credits: CreditsResponse;
  video: string;
  recommendations: Movie[];
}

const DetailsMovie: React.FC = () => {
  const { details, credits, video, recommendations  } = useLoaderData() as UseLoaderData;

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
      <Container maxW='1250px' py={74}>
        <Heading color='#131313' fontSize='1.75rem' fontWeight={700} lineHeight='2rem' mb={6}>Elenco original</Heading>
        <Cast
          items={credits.cast}
        />
        {video && (
          <>
            <Heading color='#131313' fontSize='1.75rem' fontWeight={700} lineHeight='2rem' mb={6} mt={10}>Trailer</Heading>
            <Trailer
              src={video}
            />
          </>
        )}
        {recommendations.length > 0 && (
          <>
            <Heading color='#131313' fontSize='1.75rem' fontWeight={700} lineHeight='2rem' mb={6} mt={10}>Recomendações</Heading>
            <Grid templateColumns='repeat(6, 1fr)' gap='2rem' width='100%'>
              {
                recommendations.map((recommendation) => (
                  <MovieCard
                    key={recommendation.title}
                    src={`https://image.tmdb.org/t/p/original${recommendation.poster_path}`}
                    title={recommendation.title}
                    year={recommendation.release_date}
                    id={recommendation.id}
                  />
              ))
              }
            </Grid>
          </>
        )}
      </Container>
      
    </>
  );
};

export default DetailsMovie;
