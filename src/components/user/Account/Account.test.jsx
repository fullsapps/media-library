import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';

import Account from './Account';

describe('<Account />', () => {
  it('renders', async () => {
    const email = 'auser@example.com';
    const { getByText } = render(
      <Account
        user={{ uid: '123', email: email }}
        loading={false}
        error=""
        boundResetPassword={() => {}}
      />
    );

    expect(getByText('User Settings')).toBeInTheDocument();
    expect(getByText(email)).toBeInTheDocument();
  });

  it('renders and shows the ResetPasswordForm when button clicked', async () => {
    const email = 'auser@example.com';
    const { getByText, getByTestId } = render(
      <Account
        user={{ uid: '123', email: email }}
        loading={false}
        error=""
        boundResetPassword={() => {}}
      />
    );

    expect(getByText('User Settings')).toBeInTheDocument();
    expect(getByText(email)).toBeInTheDocument();

    const showButton = getByTestId('show');
    expect(showButton).not.toBeDisabled();
    expect(showButton).toHaveAttribute('type', 'button');
    fireEvent.click(showButton);

    const submitButton = getByTestId('submit');
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveAttribute('type', 'submit');

    const newPasswordInput = getByTestId('newPasswordInput');
    expect(newPasswordInput).toBeInTheDocument();
    fireEvent.change(newPasswordInput, { target: { value: 'password' } });

    expect(submitButton).not.toBeDisabled();

    await wait(() => {
      fireEvent.click(submitButton);
    });

    await wait(() => {
      expect(newPasswordInput).not.toBeInTheDocument();
    });
  });
});
