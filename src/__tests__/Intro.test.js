import { render, screen } from '@testing-library/react';
import Intro from '../components/Intro';

test('renders intro section with heading and text', () => {
  render(<Intro />);
  expect(screen.getByText(/Why Saint Louis?/i)).toBeInTheDocument();
  expect(screen.getByText(/Saint Louis, Missouri, is a city rich in history/i)).toBeInTheDocument();
});
