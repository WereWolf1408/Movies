import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { store } from '../store/store';
import { Dropdown } from '../components/common/Dropdown';

describe('Dropdown Component', () => {
  it('---> shapshot test:', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Dropdown options={['1', '2', '3']} dropdownType={'simple'} />
      </Provider>
    );
    expect(asFragment).toMatchSnapshot();
  });

  it(`----> test callback trigger correctly:`, () => {
    const mockCallback = jest.fn(() => {
      console.log('simply to test console');
    });
    const { getByText } = render(
      <Provider store={store}>
        <Dropdown
          options={['1', '2', '3']}
          dropdownType={'simple'}
          callback={mockCallback}
        />
      </Provider>
    );
    const dropdown = getByText('select value');
    expect(dropdown).toBeInTheDocument();
    userEvent.click(dropdown);
    const firstOption = getByText('1');
    expect(firstOption).toBeInTheDocument();
    userEvent.click(firstOption);
    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('test multuselect dropdown:', () => {
    const register = jest.fn();
    const { getByText, getByPlaceholderText, getAllByRole } = render(
      <Provider store={store}>
        <Dropdown
          options={['1', '2', '3']}
          dropdownType={'multiline'}
          register={register}
        />
      </Provider>
    );

    userEvent.click(getByPlaceholderText('select value'));
    expect(getAllByRole('checkbox').length).toBe(3);
    userEvent.click(getAllByRole('checkbox')[0]);
    userEvent.click(getAllByRole('checkbox')[1]);
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
  });
});
