//Filename: Interactive.test.js
//Author: Kyle McColgan
//Date: 27 July 2025
//Description: This file contains the Jest unit tests for the facts Interactive section.

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Interactive from '../components/Interactive/Interactive.jsx';

// Mock the data module for testing purposes.
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

  //Test #1: Renders landmark and heading.
  test('renders an accessible region labelled by its heading.', () => {
    const region = screen.getByRole("region", {
      name: /Discover a Random Fact/i,
    });
    expect(region).toBeInTheDocument();
  });

  //Test #2: Renders button with proper aria-label attribute.
  test('renders the action button.', () => {
    const button = screen.getByRole("button", {
      name: /Generate a Random Fact about Saint Louis/i,
    });
    expect(button).toBeInTheDocument();
  });

  //Test #3: Clicking the button shows a fact.
  test('Fact gets displayed after clicking on the button.', () => {
    const button = screen.getByRole("button", {
      name: /Generate a Random Fact about Saint Louis/i,
    });

    fireEvent.click(button);

    const possibleTitles = ["Fact 1", "Fact 2", "Fact 3"];
    const displayed = possibleTitles.some((t) =>
      screen.queryByRole("heading", { name: t })
    );

    expect(displayed).toBe(true);
  });

  //Test #4: The fact container includes the aria-live attribute when visible.
  test('Fact container includes the aria-live=polite when a fact gets displayed.', async () => {
    const button = screen.getByRole("button", {
      name: /Generate a Random Fact about Saint Louis/i,
    });

    fireEvent.click(button);

    //Wait for the <h3> (level 3) to render, then check its parent element.
    const titleElement = await screen.findByRole("heading", { level: 3 });
    const liveRegion = titleElement.closest(".interactive-fact-display");

    expect(liveRegion).toHaveAttribute("aria-live", "polite");
  });

  //Test #5: No facts are visible on initial UI render.
  test('No fact is displayed before initial button click', () => {
    const factTitle = screen.queryByRole('heading', { level: 3 });
    expect(factTitle).toBeNull(); // Fact should not be displayed before button click
  });

  //Test #6: Fact desciption gets rendered and corresponds to the displayed title.
  test('Clicking the action button shows corresponding description for the displayed title', () => {
    const button = screen.getByRole("button", {
      name: /Generate a Random Fact about Saint Louis/i,
    });

    fireEvent.click(button);

    //Get the title text.
    const titleElement = screen.getByRole("heading", { level: 3 });
    const titleText = titleElement.textContent;

    //The fact description should contain the same index number.
    const desciptionElement = screen.getByText(/description/i);
    expect(desciptionElement).toBeInTheDocument();
    expect(desciptionElement.textContent.toLowerCase()).toContain(
      titleText.split(" ")[1].toLowerCase() // "1", "2", or "3" here.
    );
  });

  //Test #7: Each button click reveals a different fact.
  test('Multiple action button clicks display different facts.', () => {
    const spy = jest.spyOn(Math, "random").mockReturnValueOnce(0.0).mockReturnValueOnce(0.9);

    const button = screen.getByRole("button", {
      name: /Generate a Random Fact about Saint Louis/i,
    });

    fireEvent.click(button);
    const firstTitle = screen.getByRole("heading", { level: 3 }).textContent;

    fireEvent.click(button);
    const secondTitle = screen.getByRole("heading", { level: 3 }).textContent;

    expect(firstTitle).not.toBe(secondTitle);

    spy.mockRestore();
  });

  //Test #8: Only ONE fact container gets rendered at a time.
  test('Renders a single fact container after multiple clicks.', () => {
    const button = screen.getByRole("button", {
      name: /Generate a Random Fact about Saint Louis/i,
    });

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    const containers = screen.getAllByRole("heading", { level: 3 }).map((h) =>
      h.closest(".interactive-fact-display")
    );

    const uniqueContainers = [...new Set(containers)];
    expect(uniqueContainers).toHaveLength(1);
  });

  //Test #9: Action button remains focusable (keyboard navigation).
  test('The action button is focusable via the keyboard.', () => {
    const button = screen.getByRole("button", {
      name: /Generate a Random Fact about Saint Louis/i,
    });

    button.focus();
    expect(button).toHaveFocus();
  });

  //Test #10: Region has correct id for anchor navigation.
  test('Section element carries the proper id attribute.', () => {
    const region = screen.getByRole("region", {
      name: /Discover a Random Fact/i,
    });

    expect(region).toHaveAttribute("id", "interactive");
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
