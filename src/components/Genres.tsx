import React, { useContext, useEffect } from 'react';

import { Box, Image, Text } from '@chakra-ui/react';

import Close from '../assets/close.svg';
import { GenresContext } from '../context/genresContext';


interface GenresProps {
  text: string;
  id: number;
  handleGenre: (id: number, type: 'add' | 'remove') => void;
}

const Genres: React.FC<GenresProps> = ({ text, id, handleGenre }) => {
  const [isSelected, setIsSelected] = React.useState(false);

  const { genresIDsSelected } = useContext(GenresContext)

  useEffect(() => {
    const isGenreSelected = genresIDsSelected.find(genre => genre === id)
    setIsSelected(!!isGenreSelected)
  }, [genresIDsSelected, id])

  const handleClick = () => {
    setIsSelected(!isSelected)
    if (!isSelected) {
      handleGenre(id, 'add')
      return;
    }
    handleGenre(id, 'remove')
  }

  if (isSelected) {
    return (
      <Box color='white' bg='orange.500'
        py={2}
        px={4}
        height={10}
        display='flex'
        justifyContent='center'
        alignItems='center'
        borderRadius={4}
        as="button"
        onClick={handleClick}
      >
        <Text fontSize='1rem' lineHeight='24px' textAlign='center'>
          {text}
        </Text>
        <Image
          ml={2}
          src={Close}
          aria-label='Close'
          alt='Close icon'
        />
      </Box>
    )
  }

  return (
    <Box color='black' bg='white'
      py={2}
      px={4}
      height={10}
      display='flex'
      justifyContent='center'
      borderRadius={4}
      as="button"
      onClick={handleClick}
    >
      <Text fontSize='1rem' lineHeight='24px' textAlign='center'>
        {text}
      </Text>
    </Box>
  );
};

export default Genres;
