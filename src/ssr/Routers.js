import React from 'react';
import { Movies } from './Movies';

import { Routes, Route } from 'react-router-dom';

export const Routers = (props) => {
  const modifiedProps = { ...props, staticRoute: true };

  return (
    <Routes>
      <Route path="/search" element={<Movies {...modifiedProps} />} />
      <Route path="/search/:id" element={<Movies {...modifiedProps} />} />
    </Routes>
  );
};
