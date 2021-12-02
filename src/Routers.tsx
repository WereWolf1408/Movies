import React, { useEffect } from 'react';
import { Routes, Route, Navigate, matchPath } from 'react-router-dom';
import { App } from './App';
import { DefaultPage } from './components/containers/404Page/DefaultPage';

export const Routers = () => {
  useEffect(() => {
    let a = matchPath('/get-started/2', '/get-started/:id');
    console.log(a);
  });

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/search" />} />
      <Route path="/search" element={<App />}>
        <Route path=":query" element={<App />} />
      </Route>
      <Route path="*" element={<DefaultPage />} />
    </Routes>
  );
};
