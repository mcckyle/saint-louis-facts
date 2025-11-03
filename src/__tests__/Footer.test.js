//Filename: Footer.test.js
//Author: Kyle McColgan
//Date: 03 November 2025
//Description: This file contains the Jest unit tests for the Saint Louis facts project Footer section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer.jsx';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  // Test #1:
  test('renders the footer with the correct text', () => {
    expect(
      screen.getByText(/Celebrating the enduring spirit of/i)
    ).toBeInTheDocument();
  });

  // Test #2:
  test('contains a link to the official Saint Louis government website', () => {
    const govLink = screen.getByRole('link', {
      name: /Saint Louis Gov/i,
    });
    expect(govLink).toBeInTheDocument();
    expect(govLink).toHaveAttribute('href', 'https://www.stlouis-mo.gov');
  });

  // Test #3:
  test('contains a link to the Explore Saint Louis website', () => {
    const exploreLink = screen.getByRole('link', {
      name: /Explore STL/i,
    });
    expect(exploreLink).toBeInTheDocument();
    expect(exploreLink).toHaveAttribute('href', 'https://explorestlouis.com');
  });

  // Test #4:
  test('contains a link to navigate back to the top of the page', () => {
    const backToTopLink = screen.getByRole('link', { name: /Back to top/i });
    expect(backToTopLink).toBeInTheDocument();
    expect(backToTopLink).toHaveAttribute('href', '#top');
  });

  // Test #5:
  test('footer links open in a new tab (except internal links)', () => {
    const externalLinks = screen.getAllByRole('link').filter((link) =>
      link.getAttribute('href')?.startsWith('http')
    );
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  // Test #6:
  test('renders the container div with appropriate class name', () => {
    const container = screen.getByText(/enduring spirit/i).closest('.footer-inner');
    expect(container).toBeInTheDocument();
  });

  // Test #7:
  test('renders all footer links with the correct class', () => {
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveClass('footer-link');
    });
  });

  // Test #8:
  test('renders an accessible footer element with role banner', () => {
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  // Test #9:
  test('renders exactly three links in the footer', () => {
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  // Test #10:
  test('displays the footer text with the correct class', () => {
    const footerText = screen.getByText(/enduring spirit/i);
    expect(footerText).toHaveClass('footer-message');
  });
});
