//Filename: Intro.test.js
//Author: Kyle McColgan
//Date: 30 March 2026
//Description: This file contains the Jest unit tests for the Saint Louis Facts project Intro section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import Intro from '../components/Intro/Intro.jsx';

describe('Intro Component', () => {
  beforeEach(() => {
    render(<Intro />);
  });

  //Test #1
  test('renders the intro section', () => {
    const introSection = screen.getByRole('region');
    expect(introSection).toBeInTheDocument();
  });

  //Test #2
  test('renders the correct heading', () => {
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/Welcome to the Heart of Saint Louis/i);
  });

  //Test #3
  test('renders a paragraph with the correct description', () => {
    const paragraph = screen.getByText(/Where the Mississippi/i);
    expect(paragraph).toBeInTheDocument();
  });

  //Test #4
  test('applies the correct class name to the intro section', () => {
    const introSection = screen.getByRole('region');
    expect(introSection).toHaveClass('intro');
  });

  //Test #5
  test('contains exactly one heading element', () => {
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(1);
  });

  //Test #6
  test('contains exactly three paragraph elements', () => {
    const { container } = render(<Intro />);
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs).toHaveLength(3);
  });

  //Test #7
  test('contains no additional content besides the heading and paragraph', () => {
    const sectionChildren = screen.getByRole('region').children;
    expect(sectionChildren).toHaveLength(1); // One intro content.
  });

  //Test #8
  test('renders the intro section with correct structure', () => {
    const { container } = render(<Intro />);
    expect(container).toMatchSnapshot();
  });

  //Test #9
  test('the paragraph text is visible and not empty', () => {
    const paragraph = screen.getByText(/Where the Mississippi/i);
    expect(paragraph).toBeVisible();
    expect(paragraph).not.toBeEmptyDOMElement();
  });

  //Test #10 - TODO: refactor for aria-labelledby.
  // test('renders an accessible region with appropriate role', () => {
  //   const introSection = screen.getByRole('region');
  //   expect(introSection).toHaveAttribute('role', 'region');
  // });
});
