//Filename: FunFactsList.test.js
//Author: Kyle McColgan
//Date: 07 July 2025
//Description: This file contains the Jest unit tests for the facts section.

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

// jest.mock("../data/facts", () => ({ facts: mockFacts }));

test("renders the section title", () => {
    render(<FunFactsList facts={mockFacts} />);
    expect(
      screen.getByText(/Discover Fascinating Facts About Saint Louis/i))
    .toBeInTheDocument();
});

//TODO: Fix hardcoded facts number...
test("renders the correct number of fact items", () => {
    render(<FunFactsList facts={mockFacts} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(mockFacts.length);
});
