import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { store } from '../store/store';
import { MovieItem } from '../components/common/MovieItem';
import { mockMoview } from '../utils/utils';

describe('MovieItem Component', () => {
  it('---> shapshot test:', () => {
    const mockOpenFunction = jest.fn();
    const mockCloseFunction = jest.fn();
    const { asFragment } = render(
      <Provider store={store}>
        <MovieItem
          item={mockMoview}
          showMovieOptions={false}
          closeMovieOptionsHandler={mockCloseFunction}
          openMovieOptionsHandler={mockOpenFunction}
        />
      </Provider>
    );
    expect(asFragment).toMatchSnapshot();
  });

  it(`should call callback functions:`, () => {
    const mockOpenFunction = jest.fn(() => {
      console.log(`open function callback was called`);
    });
    const mockCloseFunction = jest.fn();
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <MovieItem
          item={mockMoview}
          showMovieOptions={false}
          closeMovieOptionsHandler={mockCloseFunction}
          openMovieOptionsHandler={mockOpenFunction}
        />
      </Provider>
    );
    userEvent.click(getByRole('tools'));
    expect(mockOpenFunction.mock.calls.length).toBe(1);
  });
});
