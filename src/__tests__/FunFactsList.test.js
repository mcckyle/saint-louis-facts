//Filename: FunFactsList.test.js
//Author: Kyle McColgan
//Date: 07 July 2025
//Description: This file contains the Jest unit tests for the facts section.

import React from 'react';
import { render, screen, within } from '@testing-library/react';
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

const setup = () => render(<FunFactsList facts={mockFacts} />);

//Test #1: Heading renders properly.
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

//Test #3: Each fact is properly titled.
test("renders each fact title.", () => {
    setup();
    mockFacts.forEach(({ title }) =>
        expect(screen.getByRole("heading", { name: title })).toBeInTheDocument()
    );
});

//Test #5: Shows Sources label only when a fact has sources listed.
test("shows 'Sources:' label only for facts with at least one source listed.", () => {
    setup();

    //Gateway Arch fact has sources listed:
    const archFact = screen.getByRole("heading", {
      name: /gateway arch/i,
    }).closest("li");
    expect(within(archFact).getByText(/sources/i)).toBeInTheDocument();

    //Toasted Ravioli fact does not have any sources listed:
    const ravioliFact = screen.getByRole("heading", {
      name: /toasted ravioli/i,
    }).closest("li");
    expect(within(ravioliFact).queryByText(/sources/i)).toBeNull();
});

//Test #6: Link href tag matches the data.
test("renders proper href for each source link.", () => {
    setup();
    const link = screen.getByRole("link", { name: /wikipedia/i });
    expect(link).toHaveAttribute(
      "href",
      "https://en.wikipedia.org/wiki/Gateway_Arch"
    );
});

//Test #7: Links include proper rel and target attributes.
test("source links open in a new tab safely.", () => {
    setup();
    const link = screen.getByRole("link", { name: /wikipedia/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
});

//Test #8: Section is accessible via role="region" and aria-labelledby.
test("section has role region and is labelled by heading.", () => {
    setup();
    const region = screen.getByRole("region", { name: /Discover Fascinating/i });
    expect(region).toBeInTheDocument();
});

//Test #9: Container div is present with the data-testid.
test("facts container div is present with correct test id label.", () => {
    setup();
    expect(screen.getByTestId("facts-container")).toBeInTheDocument();
});

//Test #10: UL has role list and contains correct number of children.
test("facts list element has role list.", () => {
    setup();
    const list = screen.getByRole("list");
    expect(list.children).toHaveLength(mockFacts.length);
});
