//Filename: FunFactsList.test.js
//Author: Kyle McColgan
//Date: 28 April 2025
//Description: Contains the Jest unit tests for the facts FunFactsList section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import FunFactsList from '../components/FunFactsList';

const mockFacts = [
  {
    title: "Gateway Arch",
    description: "It’s the tallest arch in the world.",
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gateway_Arch" },
    ],
  },
  {
    title: "Toasted Ravioli",
    description: "A Saint Louis culinary creation.",
    sources: [],
  },
];

test("renders the section title", () => {
  render(<FunFactsList />);
  expect(screen.getByText(/Discover Fascinating Facts About Saint Louis/i)).toBeInTheDocument();
});

//TODO: Fix hardcoded facts number...
test("renders the correct number of fact items", () => {
    render(<FunFactsList />);
    expect(screen.getAllByRole("listitem")).toHaveLength(21);
});
