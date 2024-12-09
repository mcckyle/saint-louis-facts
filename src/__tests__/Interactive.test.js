import { render, screen, fireEvent } from '@testing-library/react';
import Interactive from '../components/Interactive';

test('renders button and displays fact on click', () => {
  render(<Interactive />);
  const button = screen.getByText(/Get a Fun Fact/i);
  fireEvent.click(button);
  expect(screen.getByRole('heading')).toBeInTheDocument(); // Assumes fact title will be in heading
});
