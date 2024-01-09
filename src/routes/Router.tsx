import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import Home from '../pages/Home';
import DetailsMovie from '../pages/DetailsMovie';

import api from '../services/api';

import { formatTime,formatDate } from '../utils/dateHours';
import { DetailsResponse, VideoResponse, CreditsResponse, RecomendationsResponse } from '../types/axiosResponse';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/details/:id', element: <DetailsMovie />, loader: async ({ params }) => { 
    const [details, credits, recommendations, videos] = await Promise.all([
      api.get<DetailsResponse>(`movie/${params.id}?language=pt-BR`),
      api.get<CreditsResponse>(`movie/${params.id}/credits?language=pt-BR`),
      api.get<RecomendationsResponse>(`movie/${params.id}/recommendations?language=pt-BR`),
      api.get<VideoResponse>(`movie/${params.id}/videos?language=pt-BR`),
    ])
    return {
      details: {
        title: details.data.title,
        imageUrl: `https://image.tmdb.org/t/p/original${details.data.poster_path}`,
        avaliation: Math.floor(details.data.vote_average * 10),
        subtitle: `${formatDate(details.data.release_date)} • ${details.data.genres.map(genre => genre.name).join(', ')} • ${formatTime(details.data.runtime)}`,
        overview: details.data.overview,
      },
      credits: credits.data,
      recommendations: recommendations.data,
      video: videos.data.results.length > 0 ? `https://www.youtube.com/embed/${videos.data.results.find(result => result.type === 'Trailer')?.key }` : '' ,
    }
  } },
]);

function Router() {
  return <ChakraProvider><RouterProvider router={router}/></ChakraProvider>;
}

export default Router;