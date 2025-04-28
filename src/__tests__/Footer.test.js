//Filename: Footer.test.js
//Author: Kyle McColgan
//Date: 28 April 2025
//Description: Contains the Jest unit tests for the facts Footer section.

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  test('renders the footer with the correct text', () => {
    render(<Footer />);
    expect(
      screen.getByText(/This project draws inspiration from the vibrant culture and rich history of Saint Louis./i)
    ).toBeInTheDocument();
  });

  test('contains a link to the official Saint Louis government website', () => {
    render(<Footer />);
    const govLink = screen.getByRole('link', {
      name: /Visit the official Saint Louis government website/i,
    });
    expect(govLink).toBeInTheDocument();
    expect(govLink).toHaveAttribute('href', 'https://www.stlouis-mo.gov');
  });

  test('contains a link to the Explore Saint Louis website', () => {
    render(<Footer />);
    const exploreLink = screen.getByRole('link', {
      name: /Visit Explore Saint Louis/i,
    });
    expect(exploreLink).toBeInTheDocument();
    expect(exploreLink).toHaveAttribute('href', 'https://explorestlouis.com');
  });

  test('contains a link to navigate back to the top of the page', () => {
    render(<Footer />);
    const backToTopLink = screen.getByRole('link', { name: /Back to top/i });
    expect(backToTopLink).toBeInTheDocument();
    expect(backToTopLink).toHaveAttribute('href', '#top');
  });

  test('footer links open in a new tab (except internal links)', () => {
    render(<Footer />);
    const externalLinks = screen.getAllByRole('link').filter((link) =>
      link.getAttribute('href')?.startsWith('http')
    );
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test('renders the container div with appropriate class name', () => {
    render(<Footer />);
    const container = screen.getByText(/vibrant culture and rich history/i).closest('.footer-container');
    expect(container).toBeInTheDocument();
  });

  test('renders all footer links with the correct class', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveClass('footer-link');
    });
  });

  test('renders an accessible footer element with role banner', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders exactly three links in the footer', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  test('displays the footer text with the correct class', () => {
    render(<Footer />);
    const footerText = screen.getByText(/vibrant culture and rich history/i);
    expect(footerText).toHaveClass('footer-text');
  });
});
