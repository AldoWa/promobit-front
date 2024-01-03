import React, { useEffect } from 'react';

import Filter from './Filter';

import { Box, Container, VStack, Text } from '@chakra-ui/react';
import api from '../services/api';

interface Genres {
  id: number;
  name: string;
}

interface GenresResponse {
  genres: Genres[];
}

const Banner: React.FC = () => {
  const [genres, setGenres] = React.useState<Genres[]>([]);

  useEffect(() => {
    const getGenres = async () => {
      const { data } = await api.get<GenresResponse>('genre/movie/list?language=pt')

      setGenres(data.genres)
    }

    getGenres()
  }, [])


  return (
    <Box height={449} bg='purple.900'>
      <Container maxW={1033} height='100%' alignItems='center'>
        <VStack
          spacing={10}
          height='100%'
          justifyContent='center'
        >
          <Text fontSize='5xl' color='white' fontWeight='bold' textAlign={'center'} lineHeight='56px'>
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </Text>
          <Filter
            genres={genres}
          />
        </VStack>
      </Container>
    </Box>
  );
};

export default Banner;
