import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About Component Tests', () => {
  test("checks textContent to contain 'Developed by [Твоє Прізвище]'", () => {
    render(<About setPage={() => {}} />);
    expect(screen.getByText(/Розробник:/i)).toBeInTheDocument();
  });

  test('checks component to contain game logo icons', () => {
    render(<About setPage={() => {}} />);
    expect(screen.getByText(/⭕❌/i)).toBeInTheDocument();
  });
});
