import React, { useContext } from 'react';
import Genres from './Genres';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { GenresContext } from '../context/genresContext';

interface Genres {
  id: number;
  name: string;
}

const Filter: React.FC = () => {
  const { genres, handleGenre } = useContext(GenresContext);

  return (
    <VStack spacing={4}>
      <Text fontSize='0.875rem' fontWeight={700} color='white' data-testid="filter-text">FILTRE POR:</Text>
      <HStack flexWrap='wrap' justifyContent='center' data-testid="filter-genres">
        {genres.map(genre => (
          <Genres
            key={genre.id}
            text={genre.name}
            id={genre.id}
            handleGenre={handleGenre}
          />
        ))}
      </HStack>
    </VStack>
  );
}

export default Filter;
