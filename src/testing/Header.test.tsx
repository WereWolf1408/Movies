import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { store } from '../Redux/store';
import { Header } from '../components/containers/Header';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

describe('BreadCrumb Component', () => {
  let mockStore: any;
  beforeEach(() => {
    mockStore = store;
  });
  it('shoud change state after input will be changed', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header title={'header title'} />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    userEvent.type(
      screen.getByPlaceholderText('What do you want to watch?'),
      'enot'
    );
  });
  it('button click should open popup', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header title={'header title'} />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    userEvent.click(getByText('+ add movie'));
    expect(getByText(/ADD MOVIE/i)).toBeInTheDocument();
    userEvent.click(getByText(/search/i));
  });
});
