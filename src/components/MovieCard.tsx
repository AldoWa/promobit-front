import { GridItem, Image, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';

interface MovieProps {
  src: string;
  title: string;
  year: string;
}

const MovieCard: React.FC<MovieProps> = ({ title, year, src }) => {
  return (
    <GridItem width={176} alignItems='start' justifyContent='start' >
      <button>
        <Image
          src={src}
          alt={`Movie ${title}`}
          aria-label={`Movie ${title}`}
          width='100%'
          height={264}
          borderRadius={4}
          fallback={<Skeleton width={176} height={264} borderRadius={4} />}>
        </Image>
        <Text color='black' fontSize='md' textAlign='start' fontWeight={700} mt="8px">{title}</Text>
        <Text color='#646464'
          fontSize='sm'
          textAlign='start'
          fontWeight={700}
          width='100%'
          mt="4px"
        >{year}</Text>
      </button>
    </GridItem>
  );
};

export default MovieCard;
