import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import api from '../services/api';

interface GenresProviderProps {
  children: React.ReactNode;
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenresResponse {
  genres: Genre[];
}

export interface GenresContextData {
  genres: Genre[];
  handleGenre: (id: number, type: 'add' | 'remove') => void;
  genresIDsSelected: number[];
  resetGenresSelected: () => void;
}

export const GenresContext = createContext<GenresContextData>(
  {} as GenresContextData
);
export function GenresProvider({ children }: Readonly<GenresProviderProps>) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genresIDsSelected, setGenresIDsSelected] = useState<number[]>([]);

  useEffect(() => {
    const getGenres = async () => {
      const { data } = await api.get<GenresResponse>('genre/movie/list?language=pt')

      setGenres(data.genres)
    }

    getGenres()
  }, [])

  const addGenreSelected = useCallback((id: number) => {
    setGenresIDsSelected([...genresIDsSelected, id])
  }, [genresIDsSelected])

  const removeGenreSelected = useCallback((id: number) => {
    const newGenres = genresIDsSelected.filter(genre => genre !== id)
    setGenresIDsSelected(newGenres)
  }, [genresIDsSelected])

  const resetGenresSelected = useCallback(() => setGenresIDsSelected([]), [])

  const handleGenre = useCallback((id: number, type: 'add' | 'remove') => {
    if (type === 'add') {
      addGenreSelected(id)
      return;
    }
    removeGenreSelected(id)
  }, [addGenreSelected, removeGenreSelected])


  const valueProviderMemo = useMemo(() => ({ genres, genresIDsSelected, handleGenre, resetGenresSelected }), [genres, genresIDsSelected, handleGenre, resetGenresSelected])

  return (
    <GenresContext.Provider value={valueProviderMemo}>
      {children}
    </GenresContext.Provider>
  );
}
