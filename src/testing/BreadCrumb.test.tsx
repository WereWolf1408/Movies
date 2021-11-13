import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BreadCrumb } from '../components/containers/BreadCrumb';
import { store } from '../store/store';

describe('BreadCrumb Component', () => {
  let mockStore: any;
  beforeEach(() => {
    mockStore = store;
  });

  it('---> shapshot test:', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BreadCrumb />
      </Provider>
    );
    expect(asFragment).toMatchSnapshot();
  });

  it(`---> user interaction test`, async () => {
    const { getByText } = render(
      <Provider store={store}>
        <BreadCrumb />
      </Provider>
    );
    const breadCrumbItem = getByText(/Documentary/i);
    expect(breadCrumbItem).toBeInTheDocument();
    expect(breadCrumbItem).not.toHaveClass('active');
    userEvent.click(breadCrumbItem);
    expect(breadCrumbItem).toHaveClass('active');
  });

  it(`---> BreadCrumb test dropdown`, () => {
    const { getByText } = render(
      <Provider store={store}>
        <BreadCrumb />
      </Provider>
    );
    const dropdown = getByText('select value');
    expect(dropdown).toBeInTheDocument();
    userEvent.click(dropdown);
    expect(getByText('title')).toBeInTheDocument();
  });
});
