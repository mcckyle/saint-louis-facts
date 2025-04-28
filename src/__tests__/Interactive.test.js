//Filename: Interactive.test.js
//Author: Kyle McColgan
//Date: 28 April 2025
//Description: Contains the Jest unit tests for the facts Interactive section.

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Interactive from '../components/Interactive';

// Mock data for testing
jest.mock('../data/facts', () => ({
  facts: [
    { title: 'Fact 1', description: 'Description 1' },
    { title: 'Fact 2', description: 'Description 2' },
    { title: 'Fact 3', description: 'Description 3' },
  ],
}));

describe('Interactive Component', () => {
  beforeEach(() => {
    render(<Interactive />);
  });

  // test('renders the interactive section with a button', () => {
  //   const section = screen.getByRole('region', { name: /interactive/i });
  //   expect(section).toBeInTheDocument();
  //
  //   const button = screen.getByRole('button', { name: /Generate a random fact about Saint Louis/i });
  //   expect(button).toBeInTheDocument();
  // });

  test('does not display a fact initially', () => {
    const factTitle = screen.queryByRole('heading', { level: 3 });
    expect(factTitle).toBeNull(); // Fact should not be displayed before button click
  });

  test('displays a random fact when button is clicked', () => {
    const button = screen.getByRole('button', { name: /Generate a random Saint Louis fact/i });
    fireEvent.click(button);

    const factTitle = screen.getByRole('heading', { level: 3 });
    expect(factTitle).toBeInTheDocument();

    const factDescription = screen.getByText(/Description [1-3]/);
    expect(factDescription).toBeInTheDocument();
  });

  // test('renders a different fact on subsequent button clicks', () => {
  //   const button = screen.getByRole('button', { name: /Generate a random fact about Saint Louis/i });
  //
  //   // Click multiple times and check if the fact changes
  //   fireEvent.click(button);
  //   const firstFactTitle = screen.getByRole('heading', { level: 3 }).textContent;
  //
  //   fireEvent.click(button);
  //   const secondFactTitle = screen.getByRole('heading', { level: 3 }).textContent;
  //
  //   // Ensure at least two different facts were shown (not guaranteed unless the data is large)
  //   expect(firstFactTitle).not.toEqual(secondFactTitle);
  // });

  // test('ensures the fact display is accessible with aria-live', () => {
  //   const button = screen.getByRole('button', { name: /Generate a random fact about Saint Louis/i });
  //   fireEvent.click(button);
  //
  //   const factDisplay = screen.getByRole('region', { name: /interactive/i });
  //   expect(factDisplay).toHaveAttribute('aria-live', 'polite');
  // });

  test('fact title has appropriate styling class', () => {
    const button = screen.getByRole('button', { name: /Generate a random Saint Louis fact/i });
    fireEvent.click(button);

    const factTitle = screen.getByRole('heading', { level: 3 });
    expect(factTitle).toHaveClass('fact-title');
  });

  test('fact description has appropriate styling class', () => {
    const button = screen.getByRole('button', { name: /Generate a random Saint Louis fact/i });
    fireEvent.click(button);

    const factDescription = screen.getByText(/Description [1-3]/);
    expect(factDescription).toHaveClass('fact-description');
  });

  test('ensures button is focusable and interactive', () => {
    const button = screen.getByRole('button', { name: /Generate a random Saint Louis fact/i });
    button.focus();
    expect(button).toHaveFocus();

    fireEvent.click(button);
    expect(button).toHaveTextContent(/Show Me a Fact/i); // Verify text remains consistent
  });

  test('handles clicking the button multiple times without errors', () => {
    const button = screen.getByRole('button', { name: /Generate a random Saint Louis fact/i });
    for (let i = 0; i < 5; i++) {
      fireEvent.click(button);
      const factTitle = screen.getByRole('heading', { level: 3 });
      expect(factTitle).toBeInTheDocument();
    }
  });

  test('renders appropriate fact content after button click', () => {
    const button = screen.getByRole('button', { name: /Generate a random Saint Louis fact/i });
    fireEvent.click(button);

    const factTitle = screen.getByRole('heading', { level: 3 });
    const factDescription = screen.getByText(/Description [1-3]/);

    expect(factTitle).toBeTruthy();
    expect(factDescription).toBeTruthy();
  });
});
