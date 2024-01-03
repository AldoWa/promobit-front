import React from 'react';
import ButtonFilter from './ButtonFilter';
import { HStack, Text, VStack } from '@chakra-ui/react';

interface Genres {
  id: number;
  name: string;
}
interface FilterProps {
  genres: Genres[];
}

const Filter: React.FC<FilterProps> = ({ genres }) => {
  return (
    <VStack spacing={4}>
      <Text fontSize='0.875rem' fontWeight={700} color='white'>FILTRE POR:</Text>
      <HStack flexWrap='wrap' justifyContent='center'>
        {genres.map(genre => (
          <ButtonFilter
            key={genre.id}
            text={genre.name}
            isSelected={false}
          />
        ))}
      </HStack>
    </VStack>
  );
}

export default Filter;
