//Filename: Interactive.test.jsx
//Author: Kyle McColgan
//Date: 18 November 2026
//Description: This file contains the Vitest unit tests for the Saint Louis facts project Interactive section.

import React from "react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Interactive from "../components/Interactive/Interactive.jsx";

// Mock the data module for testing purposes.
const mockFacts = vi.hoisted(() => [
  { title: "Fact 1", description: "Description 1" },
  { title: "Fact 2", description: "Description 2" },
  { title: "Fact 3", description: "Description 3" },
]);

vi.mock("../data/facts", () => ({
  facts: mockFacts,
}));

const initialFacts = [
  { title: "Fact 1", description: "Description 1" },
  { title: "Fact 2", description: "Description 2" },
  { title: "Fact 3", description: "Description 3" },
];

describe("Interactive", () => {
  beforeEach(() => {
    mockFacts.splice(0, mockFacts.length, ...initialFacts);
    render(<Interactive />);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  //Test #1: Renders the accessible section.
  test("renders a section labelled by its heading", () => {
    const region = screen.getByRole("region", {
      name: /A moment of discovery/i,
    });
    expect(region).toBeInTheDocument();
  });

  //Test #2: Renders the initial action button.
  test("renders the button with its initial label", () => {
    const button = screen.getByRole("button", {
      name: /show me a fact/i,
    });
    expect(button).toBeInTheDocument();
  });

  //Test #3: Renders the initial empty state.
  test("displays the discovery placeholder before a fact is revealed", () => {
    expect(
      screen.getByText("There is always more to discover.")
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { level: 3 })
    ).not.toBeInTheDocument();
  });

  //Test #4: Provides as accessible live region.
  test("announces discovery updates through a polite live region", () => {
    expect(
      screen.getByRole("region", { name: /a moment of discovery/i})
        .querySelector('[aria-live="polite"]')
    ).toBeInTheDocument();
  });

  //Test #5: Reveals a fact and its matching description
  test("displays the selected fact title and description", async () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    fireEvent.click(screen.getByRole("button", { name: /show me a fact/i }));
    expect(
      await screen.findByRole("heading", {
        name: "Fact 1",
        level: 3,
      })
    ).toBeInTheDocument();
    expect(await screen.findByText("Description 1")).toBeInTheDocument();
  });

  //Test #6: Updates the button label after revealing a fact
  test("changes the button label after a fact is revealed", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);

    fireEvent.click(screen.getByRole("button", { name: /show me a fact/i }));
    expect(
      screen.getByRole("button", { name: /show me another fact/i })
    ).toBeInTheDocument();
  });

  //Test #7: Prevents immediately repeating the previous fact.
  test("reveals a different fact on consecutive clicks", async () => {
    vi.spyOn(Math, "random").mockReturnValue(0);

    const button = screen.getByRole("button", {
      name: /show me a fact/i,
    });

    //First click => Fact 1.
    fireEvent.click(button);
    expect(
      await screen.findByRole("heading", { name: "Fact 1" })
    ).toBeInTheDocument();

    //Second click => Fact 2, since Fact 1 is excluded from the pool.
    fireEvent.click(button);
    expect(
      await screen.findByRole("heading", { name: "Fact 2" })
    ).toBeInTheDocument();
  });

  //Test #8: Replaces the previous fact instead of accumulating cards.
  test("Renders only one revealed fact after multiple clicks.", async () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const button = screen.getByRole("button", {
      name: /show me a fact/i,
    });

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    await waitFor(() => {
      expect(document.querySelectorAll(".interactive-fact")).toHaveLength(1);
    });
  });

  //Test #9: Keeps the action button keyboard-focusable.
  test("allows the action button to receive keyboard focus", () => {
    const button = screen.getByRole("button", {
      name: /show me a fact/i,
    });

    button.focus();
    expect(button).toHaveFocus();
  });

  //Test #10: Safely handles an empty facts collection.
  test("does not reveal a fact when no facts are available", () => {
    mockFacts.length = 0;

    //Render with the updated empty dataset.
    const { unmount } = render(<Interactive />);

    fireEvent.click(
      screen.getAllByRole("button", { name: /show me a fact/i })[1]
    );
    expect(screen.getAllByText("There is always more to discover.")).toHaveLength(2);
    expect(screen.queryAllByRole("heading", { level: 3 })).toHaveLength(0);
    unmount();
  });

  // --- OLD TESTS BELOW THIS LINE ---
  //
  // test('displays a random fact when button is clicked', () => {
  //   const button = screen.getByRole('button', { name: /Generate a random Saint Louis fact/i });
  //   fireEvent.click(button);
  //
  //   const factTitle = screen.getByRole('heading', { level: 3 });
  //   expect(factTitle).toBeInTheDocument();
  //
  //   const factDescription = screen.getByText(/Description [1-3]/);
  //   expect(factDescription).toBeInTheDocument();
  // });

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

  // test('fact title has appropriate styling class', () => {
  //   const button = screen.getByRole('button', { name: /Generate a random Saint Louis fact/i });
  //   fireEvent.click(button);
  //
  //   const factTitle = screen.getByRole('heading', { level: 3 });
  //   expect(factTitle).toHaveClass('fact-title');
  // });
  //
  // test('fact description has appropriate styling class', () => {
  //   const button = screen.getByRole('button', { name: /Generate a random Saint Louis fact/i });
  //   fireEvent.click(button);
  //
  //   const factDescription = screen.getByText(/Description [1-3]/);
  //   expect(factDescription).toHaveClass('fact-description');
  // });
  //
  // test('ensures button is focusable and interactive', () => {
  //   const button = screen.getByRole('button', { name: /Generate a random Saint Louis fact/i });
  //   button.focus();
  //   expect(button).toHaveFocus();
  //
  //   fireEvent.click(button);
  //   expect(button).toHaveTextContent(/Show Me a Fact/i); // Verify text remains consistent
  // });
  //
  // test('handles clicking the button multiple times without errors', () => {
  //   const button = screen.getByRole('button', { name: /Generate a random Saint Louis fact/i });
  //   for (let i = 0; i < 5; i++) {
  //     fireEvent.click(button);
  //     const factTitle = screen.getByRole('heading', { level: 3 });
  //     expect(factTitle).toBeInTheDocument();
  //   }
  // });
  //
  // test('renders appropriate fact content after button click', () => {
  //   const button = screen.getByRole('button', { name: /Generate a random Saint Louis fact/i });
  //   fireEvent.click(button);
  //
  //   const factTitle = screen.getByRole('heading', { level: 3 });
  //   const factDescription = screen.getByText(/Description [1-3]/);
  //
  //   expect(factTitle).toBeTruthy();
  //   expect(factDescription).toBeTruthy();
  // });
});
