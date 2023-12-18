import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const Teachers = React.lazy(() => import('../pages/Teachers'));
const Favorites = React.lazy(() => import('../pages/Favorites'));

const Pages = {
  Home,
  Teachers,
  Favorites,
};

export default Pages;
