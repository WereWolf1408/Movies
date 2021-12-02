import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { ContextApp } from '../ContextApp';

describe('Header Component', () => {
  it('Header snapshot test:', () => {
    const { asFragment } = render(<ContextApp />);
    expect(asFragment).toMatchSnapshot();
  });

  it(`Header 'add movie button test'`, () => {
    const { getByText } = render(<ContextApp />);
    const addMovie = getByText('+ add movie');
    expect(addMovie).toBeInTheDocument();
    userEvent.click(addMovie);
    const addMoviePopup = getByText('add movie');
    expect(addMoviePopup).toBeInTheDocument();
  });
});
