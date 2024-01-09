import { Button, HStack } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';

interface PaginationProps {
  handlePage: (page: number) => void;
  maxTotalPages: number;
  actualPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ handlePage, maxTotalPages, actualPage }) => {
  const [pagination, setPagination] = useState<number[]>([1, 2, 3, 4, 5])


  const handleNewPage = async (page: number) => {
    await handlePage(page)
    createPagination(page)
  }

  const createPagination = useCallback((page: number) => {
    if (page <= 2) {
      setPagination([1, 2, 3, 4, 5])
      return
    }

    if (page === maxTotalPages) {
      setPagination([page - 4, page - 3, page - 2, page - 1, page])
      return
    }

    if (page === maxTotalPages - 1) {
      setPagination([page - 3, page - 2, page - 1, page, page + 1])
      return
    }
    setPagination([page - 2, page - 1, page, page + 1, page + 2])
  }, [maxTotalPages])

  useEffect(() => {
    createPagination(actualPage)
  }, [actualPage, createPagination])

  return (
    <HStack justifyContent='center' mt={70} data-testid="pagination-stack">
      {actualPage > 1 && <Button onClick={() => handleNewPage(1)} data-testid="pagination-first-page">Primeira</Button>}
      {actualPage > 1 && <Button onClick={() => handleNewPage(actualPage - 1)}>{'<'}</Button>}
      <HStack data-testid="pagination-pages">
        {pagination.map(page => (
          <Button
            key={page}
            onClick={() => handleNewPage(page)}
            color={actualPage === page ? 'white' : 'black'}
            bg={actualPage === page ? 'orange.500' : 'gray.100'}
            _hover={{ bg: 'orange.500', color: 'white' }}
            aria-labelledby='Ir para a página'
          >{page}</Button>
        ))}
      </HStack>
      {actualPage < maxTotalPages && (
        <>
          <Button onClick={() => handleNewPage(actualPage + 1)}>{'>'}</Button>
          <Button onClick={() => handleNewPage(maxTotalPages)} data-testid="pagination-last-page">Última</Button>
        </>
      )}
    </HStack>
  );
};

export default Pagination;
