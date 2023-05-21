import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import Home from './Home';
import { renderWithProviders } from '../utils/test-utils';

describe('Home', () => {
  it('Render hello workd', () => {
    renderWithProviders(<Home />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
