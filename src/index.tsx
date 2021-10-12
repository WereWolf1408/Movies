import React from 'react';
import ReactDOM from 'react-dom';
import { ContextApp } from './ContextApp';
import ErrorBoundary from './components/containers/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <ContextApp />
  </ErrorBoundary>,
  document.getElementById('app')
);
