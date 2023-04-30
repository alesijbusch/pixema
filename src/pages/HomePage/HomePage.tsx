import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'routes';
import { H1 } from './styles';

export const HomePage = () => {
  return (
    <div>
      <H1>Home</H1>
      <Link to={ROUTE.FAVORITES}>Go to Favorites</Link>
    </div>
  );
};
