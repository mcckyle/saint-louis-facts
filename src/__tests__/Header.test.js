// src/__tests__/Header.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  // Test 1: Check if the header renders
  test('renders the header element', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  // Test 2: Check if the title renders
  test('renders the header title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Saint Louis, Missouri/i);
    expect(titleElement).toBeInTheDocument();
  });

  // Test 3: Check if the description renders
  test('renders the header description', () => {
    render(<Header />);
    const descriptionElement = screen.getByText(/Discover interesting facts about the Gateway to the West!/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  // Test 4: Check if the title has the correct class
  test('title has the correct class', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Saint Louis, Missouri/i);
    expect(titleElement).toHaveClass('header-title');
  });

  // Test 5: Check if the description has the correct class
  test('description has the correct class', () => {
    render(<Header />);
    const descriptionElement = screen.getByText(/Discover interesting facts about the Gateway to the West!/i);
    expect(descriptionElement).toHaveClass('header-description');
  });

  // Test 6: Check if the container div exists
  test('renders the container div', () => {
    render(<Header />);
    const containerElement = screen.getByTestId('header-container');
    expect(containerElement).toBeInTheDocument();
  });

  // Test 7: Check if the header has the correct CSS class
  test('header has the correct class', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('header');
  });

  // Test 8: Check if the header has semantic HTML structure
  test('header uses semantic HTML structure', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement.tagName).toBe('HEADER');
  });

  // Test 9: Ensure the header is accessible
  test('header is accessible', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveAttribute('aria-label', 'Page Header');
  });

  // Test 10: Ensure the description has correct text content
  test('description has correct text content', () => {
    render(<Header />);
    const descriptionElement = screen.getByText(/Discover interesting facts about the Gateway to the West!/i);
    expect(descriptionElement.textContent).toBe('Discover interesting facts about the Gateway to the West!');
  });
});
