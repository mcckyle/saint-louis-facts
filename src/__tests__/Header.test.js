// src/__tests__/Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header with title and description', () => {
  render(<Header />);
  expect(screen.getByText(/Saint Louis Facts/i)).toBeInTheDocument();
  expect(screen.getByText(/Discover interesting and fun facts about the Gateway to the West!/i)).toBeInTheDocument();
});
