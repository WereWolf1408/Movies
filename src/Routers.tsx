import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { DefaultPage } from './components/containers/404Page/DefaultPage';

export const Routers = () => {
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
