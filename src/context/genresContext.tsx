import { createContext, useCallback, useEffect, useState } from 'react';

import api from '../services/api';

interface GenresProviderProps {
  children: React.ReactNode;
}

interface Genre {
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
export function GenresProvider({ children }: GenresProviderProps) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genresIDsSelected, setGenresSelected] = useState<number[]>([]);

  useEffect(() => {
    const getGenres = async () => {
      const { data } = await api.get<GenresResponse>('genre/movie/list?language=pt')

      setGenres(data.genres)
    }

    getGenres()
  }, [])

  const addGenreSelected = useCallback((id: number) => {
    setGenresSelected([...genresIDsSelected, id])
  }, [genresIDsSelected])

  const removeGenreSelected = useCallback((id: number) => {
    const newGenres = genresIDsSelected.filter(genre => genre !== id)
    setGenresSelected(newGenres)
  }, [genresIDsSelected])

  const resetGenresSelected = useCallback(() => setGenresSelected([]), [])

  const handleGenre = useCallback((id: number, type: 'add' | 'remove') => {
    if (type === 'add') {
      addGenreSelected(id)
      return;
    }
    removeGenreSelected(id)
  }, [addGenreSelected, removeGenreSelected])


  return (
    <GenresContext.Provider value={{ genres, genresIDsSelected, handleGenre, resetGenresSelected }}>
      {children}
    </GenresContext.Provider>
  );
}
