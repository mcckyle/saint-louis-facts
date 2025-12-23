//Filename: Footer.test.js
//Author: Kyle McColgan
//Date: 22 December 2025
//Description: This file contains the Jest unit tests for the Saint Louis facts project Footer section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer.jsx';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  // Test #1: Footer renders properly.
  test('renders the footer element with the correct role and label.', () => {
    const footer = screen.getByRole('contentinfo', { name: /site footer/i });
    expect(footer).toBeInTheDocument();
  });

  // Test #2: Link to the Saint Louis Government website.
  test('contains a link to the official Saint Louis government website.', () => {
    const govLink = screen.getByRole('link', { name: /City of Saint Louis/i });
    expect(govLink).toBeInTheDocument();
    expect(govLink).toHaveAttribute('href', 'https://www.stlouis-mo.gov');
    expect(govLink).toHaveClass('footer-link');
  });

  // Test #3: Link to Explore Saint Louis website.
  test('contains a link to the Explore Saint Louis website.', () => {
    const exploreLink = screen.getByRole('link', { name: /Explore STL/i });
    expect(exploreLink).toBeInTheDocument();
    expect(exploreLink).toHaveAttribute('href', 'https://explorestlouis.com');
    expect(exploreLink).toHaveClass('footer-link');
  });

  // Test #4: Back to Top link exists with correct label and class.
  test('contains a back-to-top link with correct class and label.', () => {
    const backToTopLink = screen.getByRole('link', { name: /back to top/i });
    expect(backToTopLink).toBeInTheDocument();
    expect(backToTopLink).toHaveAttribute('href', '#top');
    expect(backToTopLink).toHaveClass('back-to-top');
  });

  // Test #5:
  test('footer links open in a new tab (except internal links).', () => {
    const externalLinks = screen.getAllByRole('link').filter((link) =>
      link.getAttribute('href')?.startsWith('http')
    );
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  // Test #6:
  test('renders the container div with appropriate class name.', () => {
    const container = screen.getByText(/enduring spirit/i).closest('.footer-inner');
    expect(container).toBeInTheDocument();
  });

  // Test #7: Renders footer meta information.
  test('renders footer meta information, including author and brand.', () => {
    const meta = screen.getByText(/Saint Louis Facts/i);
    const author = screen.getByText(/Kyle McColgan/i);
    expect(meta).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });

  // Test #8: Renders current year dynamically.
  test('displays the current year dynamically.', () => {
    const currentYear = new Date().getFullYear();
    const footer = screen.getByText(new RegExp(currentYear.toString()));
    expect(footer).toBeInTheDocument();
  });

  // Test #9: Renders expected number of links.
  test('renders exactly three links in the footer.', () => {
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  // Test #10:
  test('displays the footer text with the correct class.', () => {
    const footerText = screen.getByText(/enduring spirit/i);
    expect(footerText).toHaveClass('footer-message');
  });
});

//****************************************************************************************
// Previous Test #1:
// test('renders the footer with the correct text', () => {
//   expect(
//     screen.getByText(/Celebrating the enduring spirit of/i)
//   ).toBeInTheDocument();
// });
