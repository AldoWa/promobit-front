import { Button, HStack } from '@chakra-ui/react';
import React from 'react';

interface PaginationProps {
  handlePage: (page: number) => void;
  pagination: number[];
  maxTotalPages: number;
  actualPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ handlePage, pagination, maxTotalPages, actualPage }) => {
  return (
    <HStack justifyContent='center' my={70}>
      {actualPage > 1 && <Button onClick={() => handlePage(1)}>Primeira</Button>}
      {actualPage > 1 && <Button onClick={() => handlePage(actualPage - 1)}>{'<'}</Button>}
      {pagination.map(page => (
        <Button
          key={page}
          onClick={() => handlePage(page)}
          color={actualPage === page ? 'white' : 'black'}
          bg={actualPage === page ? 'orange.500' : 'gray.100'}
          _hover={{ bg: 'orange.500', color: 'white' }}
        >{page}</Button>
      ))}
      {actualPage < maxTotalPages && (
        <>
          <Button onClick={() => handlePage(actualPage + 1)}>{'>'}</Button>
          <Button onClick={() => handlePage(maxTotalPages)}>Última</Button>
        </>
      )}
    </HStack>
  );
};

export default Pagination;
