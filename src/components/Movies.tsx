import React, { useContext, useEffect, useState } from 'react';

import { Container, Grid, Text } from '@chakra-ui/react';

import MovieCard from './MovieCard';

import api from '../services/api';
import Pagination from './Pagination';
import { GenresContext } from '../context/genresContext';

interface Movie {
  title: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
}

interface MoviesResponse {
  page: number;
  results: Movie[],
  total_pages: number;
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [maxTotalPages,] = useState<number>(500)
  const [actualPage, setActualPage] = useState<number>(1)

  const { genresIDsSelected, resetGenresSelected } = useContext(GenresContext)

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await api.get<MoviesResponse>(`movie/popular?language=pt-BR&page=1`)

      setMovies(data.results)
      setActualPage(data.page)
    }

    getMovies()
  }, [])

  const handlePage = async (page: number) => {
    resetGenresSelected()
    try {
      const { data } = await api.get<MoviesResponse>(`movie/popular?language=pt-BR&page=${page}`)

      setMovies(data.results)
      setActualPage(data.page)

   
    } catch (error) {
      console.log(error)
    }
  }

  const moviesFilter = (movie: Movie) => {
    if (genresIDsSelected.length === 0) return true
    return movie.genre_ids.some(genre => genresIDsSelected.includes(genre))
  }

  const moviesFiltered = movies.filter(movie => moviesFilter(movie))

  return (
    <Container maxW='1250px' mt={30}>
      {moviesFiltered.length === 0 ?
        <Text fontSize='xl' color='black'>
          Nenhum filme encontrado
        </Text> :
        <Grid templateColumns='repeat(6, 1fr)' gap='2rem' width='100%'>
          {moviesFiltered.map(movie => (
            <MovieCard
              key={movie.title}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              title={movie.title}
              year={movie.release_date}
            />
          ))}
        </Grid>
      }
      <Pagination
        handlePage={handlePage}
        maxTotalPages={maxTotalPages}
        actualPage={actualPage}
      />
    </Container>
  );
};

export default Movies;
