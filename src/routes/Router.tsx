import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import Home from '../pages/Home';
import DetailsMovie from '../pages/DetailsMovie';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/details/:id', element: <DetailsMovie /> },
]);

function Router() {
  return <ChakraProvider><RouterProvider router={router}/></ChakraProvider>;
}

export default Router;