import { Box, CircularProgress, CircularProgressLabel, Container, HStack, Heading, Image, Skeleton, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export interface BannerMovieProps {
  title: string;
  imageUrl: string;
  avaliation: number;
  subtitle: string;
  overview: string;
  credits: Array<{
    type: string;
    name: string;
  }>;
  screenPlay: Array<{
    type: string;
    name: string;
  }>;
}

const BannerMovie: React.FC<BannerMovieProps> = ({ title, imageUrl, credits, avaliation, subtitle,overview, screenPlay }) => {
  return (
    <Box height={600} bg='purple.900' data-testid="banner-movie-box">
      <Container maxW='1250px' data-testid="banner-movie-container">
        <HStack pt='4.5rem' alignItems='flex-start' gap={8}>
          <Image 
            w={383}
            h={574}
            src={imageUrl}
            alt='Banner movie'
            fallback={<Skeleton w={600} h={574} borderRadius={4} />}
          ></Image>
          <VStack alignItems='start' gap={0}>
            <Heading as='h3' size="xl" color='white'>{ title }</Heading>
            <Text color='white' fontSize='1.125rem' mt={2} lineHeight={6} fontWeight={400}>{ subtitle }</Text>
            <HStack mt={4}>
              <Box borderRadius='100%'>
                <CircularProgress size={59} value={avaliation} color='green.300' trackColor='transparent'>
                  <CircularProgressLabel color='green.300' fontSize={16} fontWeight={700}>{avaliation}%</CircularProgressLabel>
                </CircularProgress>
              </Box>
              <Text color='white' fontSize='sm' mt={2}>Avaliação dos usuários</Text>
            </HStack>
            <Heading as='h5' size="md" color='white' mt={8}>Sinopse</Heading>
            { overview && <Text noOfLines={5} fontSize='1rem' lineHeight={6} color='#dddddd' mt={2}>
              { overview }
            </Text> }
            <HStack gap='60px' mt={6}>
              { credits.map(credit => (
                <VStack key={credit.name} alignItems='flex-start' gap={0}>
                  <Text color='white' fontWeight={700} fontSize='1rem'>{ credit.name }</Text>
                  <Text color='white' fontWeight={400} fontSize='0.875rem'>{ credit.type }</Text>
                </VStack>
              ))}
            </HStack>
            <HStack gap='60px' mt={6}>
              { screenPlay.map(credit => (
                <VStack key={credit.name} alignItems='flex-start'  gap={0}>
                  <Text color='white' fontWeight={700} fontSize='1rem'>{ credit.name }</Text>
                  <Text color='white' fontWeight={400} fontSize='0.875rem'>{ credit.type }</Text>
                </VStack>
              ))}
            </HStack>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default BannerMovie;
