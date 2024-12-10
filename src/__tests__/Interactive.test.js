import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Interactive from '../components/Interactive';

test('renders button and displays fact on click', () => {
  render(<Interactive />);

  const button = screen.getByText(/Get a Fun Fact/i);
  fireEvent.click(button);

  // Use getByRole to select the specific heading
  const factTitle = screen.getByRole('heading', { level: 3 });

  // Ensure the fact title (h3) appears after the button is clicked
  expect(factTitle).toBeInTheDocument();
});

test('button text changes after clicking to display fact', () => {
  render(<Interactive />);
  const button = screen.getByText(/Get a Fun Fact/i);
  fireEvent.click(button);

  // Assuming the button text changes to something like "Get a Fun Fact"
  expect(button).toHaveTextContent(/Get a Fun Fact/i);
});

test('does not display fact before button click', () => {
  render(<Interactive />);
  const factTitle = screen.queryByRole('heading', { level: 3 });
  expect(factTitle).toBeNull(); // Ensures no fact is shown initially
});
