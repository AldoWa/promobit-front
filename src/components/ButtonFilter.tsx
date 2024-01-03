import React from 'react';

import { Box, Image, Text } from '@chakra-ui/react';

import Close from '../assets/close.svg';


interface ButtonFilterProps {
  text: string;
  isSelected: boolean
}

const ButtonFilter: React.FC<ButtonFilterProps> = ({ isSelected, text }) => {
  if (isSelected) {
    return (
      <Box color='white' bg='orange.500'
        py={2}
        px={4}
        maxW={140}
        height={10}
        display='flex'
        justifyContent='center'
        alignItems='center'
        borderRadius={4}
        as="button"
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
      maxW={140}
      height={10}
      display='flex'
      justifyContent='center'
      borderRadius={4}
      as="button"
    >
      <Text fontSize={4} lineHeight='24px' textAlign='center'>
        {text}
      </Text>
    </Box>
  );
};

export default ButtonFilter;
