import React from 'react';
import ButtonFilter from './ButtonFilter';
import { Text, VStack } from '@chakra-ui/react';

const Filter: React.FC = () => {
  return (
    <VStack spacing={4}>
      <Text fontSize='0.875rem' fontWeight={700} color='white'>FILTRE POR:</Text>
      <ButtonFilter
        isSelected={true}
        text='Ação'
      />
    </VStack>
  );
}

export default Filter;
