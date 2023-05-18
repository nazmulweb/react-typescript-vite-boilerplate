import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from './Home';
import store from '../app';

describe('Home', () => {
  it('Render hello workd', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
