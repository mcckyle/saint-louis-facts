//Filename: Header.test.js
//Author: Kyle McColgan
//Date: 20 February 2026
//Description: This file contains the Jest unit tests for the Saint Louis facts project Header component.

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header.jsx';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  // Test #1: Check if the header renders.
  test('renders the header element', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  // Test #2: Check if the title renders.
  test('renders the header title', () => {
    const titleElement = screen.getByText(/Saint Louis/i);
    expect(titleElement).toBeInTheDocument();
  });

  // Test #3: Check if the description renders.
  test('renders the header description', () => {
    const descriptionElement = screen.getByText(/Gateway to the West - history and innovation along the Mississippi River./i);
    expect(descriptionElement).toBeInTheDocument();
  });

  // Test #4: Check if the title has the correct class.
  test('title has the correct class', () => {
    const titleElement = screen.getByText(/Saint Louis/i);
    expect(titleElement).toHaveClass('header-title');
  });

  // Test #5: Check if the description has the correct class.
  test('description has the correct class', () => {
    const descriptionElement = screen.getByText(/Gateway to the West - history and innovation along the Mississippi River./i);
    expect(descriptionElement).toHaveClass('header-subtitle');
  });

  // Test #6: Check if the content div exists.
  test('renders the content div', () => {
    const contentElement = screen.getByTestId('header-content');
    expect(contentElement).toBeInTheDocument();
  });

  // Test #7: Check if the header has the correct CSS class.
  test('header has the correct class', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('header');
  });

  // Test #8: Check if the header has semantic HTML structure.
  test('header uses semantic HTML structure', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement.tagName).toBe('HEADER');
  });

  //Test #9: Visual consistency - Snapshot test for consistent output.
  test("Header matches snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Test #10: Ensure the description has correct text content.
  test('description has correct text content', () => {
    const descriptionElement = screen.getByText(/Gateway to the West - history and innovation along the Mississippi River./i);
    expect(descriptionElement.textContent).toBe('Gateway to the West - history and innovation along the Mississippi River.');
  });
});
