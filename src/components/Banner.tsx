import React from 'react';

import Filter from './Filter';

import { Box, Container, VStack, Text } from '@chakra-ui/react';

const Banner: React.FC = () => {
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
          <Filter />
        </VStack>
      </Container>
    </Box>
  );
};

export default Banner;
