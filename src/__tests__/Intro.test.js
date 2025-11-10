//Filename: Intro.test.js
//Author: Kyle McColgan
//Date: 11 November 2025
//Description: This file contains the Jest unit tests for the Saint Louis Facts project Intro section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import Intro from '../components/Intro/Intro.jsx';

describe('Intro Component', () => {
  beforeEach(() => {
    render(<Intro />);
  });

  test('renders the intro section', () => {
    const introSection = screen.getByRole('region');
    expect(introSection).toBeInTheDocument();
  });

  test('renders the correct heading', () => {
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/Welcome to the Heart of Saint Louis/i);
  });

  test('renders a paragraph with the correct description', () => {
    const paragraph = screen.getByText(/Where the Mississippi/i);
    expect(paragraph).toBeInTheDocument();
  });

  test('applies the correct class name to the intro section', () => {
    const introSection = screen.getByRole('region');
    expect(introSection).toHaveClass('intro');
  });

  test('contains exactly one heading element', () => {
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(1);
  });

  test('contains exactly two paragraph elements', () => {
    const { container } = render(<Intro />);
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs).toHaveLength(2);
  });

  test('contains no additional content besides the heading and paragraph', () => {
    const sectionChildren = screen.getByRole('region').children;
    expect(sectionChildren).toHaveLength(1); // One intro content.
  });

  test('renders the intro section with correct structure', () => {
    const { container } = render(<Intro />);
    expect(container).toMatchSnapshot();
  });

  test('the paragraph text is visible and not empty', () => {
    const paragraph = screen.getByText(/Where the Mississippi/i);
    expect(paragraph).toBeVisible();
    expect(paragraph).not.toBeEmptyDOMElement();
  });

  test('renders an accessible region with appropriate role', () => {
    const introSection = screen.getByRole('region');
    expect(introSection).toHaveAttribute('role', 'region');
  });

});
