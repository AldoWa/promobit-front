import React, { useEffect } from 'react';

import { Container, Grid } from '@chakra-ui/react';

import MovieCard from './MovieCard';

import api from '../services/api';
import Pagination from './Pagination';

interface Movies {
  title: string;
  poster_path: string;
  release_date: string;
}

interface MoviesResponse {
  page: number;
  results: Movies[],
  total_pages: number;
}

const Movies: React.FC = () => {
  const [movies, setMovies] = React.useState<Movies[]>([])
  const [maxTotalPages,] = React.useState<number>(500)
  const [actualPage, setActualPage] = React.useState<number>(1)
  const [pagination, setPagination] = React.useState<number[]>([1, 2, 3, 4, 5])

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await api.get<MoviesResponse>(`movie/popular?language=pt-BR&page=1`)

      setMovies(data.results)
      setActualPage(data.page)
    }

    getMovies()
  }, [])

  const handlePage = async (page: number) => {
    try {
      const { data } = await api.get<MoviesResponse>(`movie/popular?language=pt-BR&page=${page}`)

      setMovies(data.results)
      setActualPage(data.page)

      if (page <= 2) {
        setPagination([1, 2, 3, 4, 5])
        return
      }

      if (page === maxTotalPages) {
        setPagination([page - 4, page - 3, page - 2, page - 1, page])
        return
      }

      if (page === maxTotalPages - 1) {
        setPagination([page - 3, page - 2, page - 1, page, page + 1])
        return
      }
      setPagination([page - 2, page - 1, page, page + 1, page + 2])
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Container maxW='1250px' mt={30}>
      <Grid templateColumns='repeat(6, 1fr)' gap='2rem' width='100%'>
        {movies.map(movie => (
          <MovieCard
            key={movie.title}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            title={movie.title}
            year={movie.release_date}
          />
        ))}
      </Grid>
      <Pagination
        pagination={pagination}
        handlePage={handlePage}
        maxTotalPages={maxTotalPages}
        actualPage={actualPage}
      />
    </Container>
  );
};

export default Movies;
