import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer with copyright text', () => {
  render(<Footer />);
  expect(screen.getByText(/© 2024 Saint Louis Fun Facts/i)).toBeInTheDocument();
});
