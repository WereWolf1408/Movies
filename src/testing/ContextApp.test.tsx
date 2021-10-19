import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContextApp } from '../ContextApp';
import '@testing-library/jest-dom';

describe('ContextApp', () => {
  it('----> test ContextApp', () => {
    const { getByText } = render(<ContextApp />);
    const textElement = getByText(/find your movie/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent('find your movie');
  });

  it(`----> Context App Seatch by Text`, () => {
    render(<ContextApp />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
