import { Genre } from "../context/genresContext";

export interface DetailsResponse {
  genres: Genre[],
  poster_path: string;
  title: string;
  vote_average: number,
  release_date: string;
  runtime: number;
  overview: string;
}

export interface Cast extends Person{
  character: string;
}

interface Person {
  character: string;
  order: number;
  name: string;
  profile_path: string;
  known_for_department: string;
}

export interface CreditsResponse {
  cast: Cast[]
  crew: Person[]
}

export interface RecomendationsResponse {
  poster_path: string;
  id: number;
  title: string;
  release_date: string;
}

export interface VideoResponse {
  results: {
    key: string;
  }[]
}