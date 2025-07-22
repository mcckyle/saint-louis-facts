//Filename: FunFactsList.test.js
//Author: Kyle McColgan
//Date: 21 July 2025
//Description: This file contains the Jest unit tests for the facts section.

import React from 'react';
import { render, screen, within } from '@testing-library/react';
import FunFactsList from '../components/FunFactsList';

// Mock data for testing purposes.
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

const setup = (facts = mockFacts) => render(<FunFactsList facts={facts} />);

//Test #1: Section Heading Renders Properly.
test("renders the section title.", () => {
    setup();
    expect(
      screen.getByRole("heading", {
        name: /Discover Fascinating Facts About Saint Louis/i,
        level: 2,
      })
    ).toBeInTheDocument();
});

//Test #2: Renders the correct fact list length.
test("renders the correct number of fact items.", () => {
    setup();
    expect(screen.getAllByRole("listitem")).toHaveLength(mockFacts.length);
});

//Test #3: Each fact title appears.
test("renders each fact title.", () => {
    setup();
    mockFacts.forEach(({ title }) =>
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument()
    );
});

//Test #4: Shows 'Sources:' label only when a fact has sources listed.
test("shows 'Sources:' label only for facts with at least one source listed.", () => {
    setup();

    //Gateway Arch fact has sources listed:
    const archFact = screen.getByRole("heading", {
      name: /gateway arch/i,
    }).closest("li");
    expect(within(archFact).getByText(/sources:/i)).toBeInTheDocument();

    //Toasted Ravioli fact does not have any sources listed:
    const ravioliFact = screen.getByRole("heading", {
      name: /toasted ravioli/i,
    }).closest("li");
    expect(within(ravioliFact).queryByText(/sources:/i)).toBeNull();
});

//Test #5: Correct href tag for source links.
test("renders proper href tag for each source link.", () => {
    setup();
    const link = screen.getByRole("link", { name: /wikipedia/i });
    expect(link).toHaveAttribute(
      "href",
      "https://en.wikipedia.org/wiki/Gateway_Arch"
    );
});

//Test #6: Links include safe attributes.
test("source links have target='_blank' and rel='noopener noreferrer'.", () => {
    setup();
    const link = screen.getByRole("link", { name: /wikipedia/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
});

//Test #7: Section accessibility attributes.
test("section has role='region' and is labelled by its heading.", () => {
    setup();
    const region = screen.getByRole("region", { name: /discover fascinating facts/i });
    expect(region).toBeInTheDocument();
});

//Test #8: Facts container div is present with the data-testid.
test("renders the container div with the correct data-testid.", () => {
    setup();
    expect(screen.getByTestId("facts-container")).toBeInTheDocument();
});

//Test #9: UL has role='list' and contains the correct number of children.
test("renders a list with correct number of items.", () => {
    setup();
    const list = screen.getByRole("list");
    expect(list.children).toHaveLength(mockFacts.length);
});

//Test #10: Renders gracefully when no facts are provided.
test("renders gracefully when given an empty facts array.", () => {
  setup([]);
  expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  expect(screen.getByRole("heading", { name: /discover fascinating/i })).toBeInTheDocument();
});
