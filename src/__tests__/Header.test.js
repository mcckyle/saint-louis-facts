//Filename: Header.test.js
//Author: Kyle McColgan
//Date: 16 October 2025
//Description: This file contains the Jest unit tests for the Saint Louis facts project Header component.

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header.jsx';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  // Test #1: Check if the header renders
  test('renders the header element', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  // Test #2: Check if the title renders
  test('renders the header title', () => {
    const titleElement = screen.getByText(/Saint Louis/i);
    expect(titleElement).toBeInTheDocument();
  });

  // Test #3: Check if the description renders
  test('renders the header description', () => {
    const descriptionElement = screen.getByText(/From the Gateway Arch to the Mississippi River - experience the enduring heart of the Midwest./i);
    expect(descriptionElement).toBeInTheDocument();
  });

  // Test #4: Check if the title has the correct class
  test('title has the correct class', () => {
    const titleElement = screen.getByText(/Saint Louis/i);
    expect(titleElement).toHaveClass('header-title');
  });

  // Test #5: Check if the description has the correct class
  test('description has the correct class', () => {
    const descriptionElement = screen.getByText(/From the Gateway Arch to the Mississippi River - experience the enduring heart of the Midwest./i);
    expect(descriptionElement).toHaveClass('header-subtitle');
  });

  // Test #6: Check if the container div exists
  test('renders the container div', () => {
    const containerElement = screen.getByTestId('header-container');
    expect(containerElement).toBeInTheDocument();
  });

  // Test #7: Check if the header has the correct CSS class
  test('header has the correct class', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('header');
  });

  // Test #8: Check if the header has semantic HTML structure
  test('header uses semantic HTML structure', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement.tagName).toBe('HEADER');
  });

  // Test #9: Ensure the header is accessible
  test('header is accessible', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveAttribute('aria-label', 'Saint Louis landing section with city skyline.');
  });

  // Test #10: Ensure the description has correct text content
  test('description has correct text content', () => {
    const descriptionElement = screen.getByText(/From the Gateway Arch to the Mississippi River - experience the enduring heart of the Midwest./i);
    expect(descriptionElement.textContent).toBe('From the Gateway Arch to the Mississippi River - experience the enduring heart of the Midwest.');
  });
});
