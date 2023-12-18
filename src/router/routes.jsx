import React from 'react';
const Home = React.lazy(() => import('../pages/Home'));
const Teachers = React.lazy(() => import('../pages/Teachers'));
const Favorites = React.lazy(() => import('../pages/Favorites'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/teachers',
    element: <Teachers />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
