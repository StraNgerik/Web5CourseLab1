import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar Tests', () => {
  test('checks navigation links presence', () => {
    render(<Navbar setPage={() => {}} />);
    expect(screen.getByText(/Вхід/i)).toBeInTheDocument();
    expect(screen.getByText(/Про нас/i)).toBeInTheDocument();
  });

  test('checks if clicking navigation link calls setPage', () => {
    const mockSet = jest.fn();
    render(<Navbar setPage={mockSet} />);
    fireEvent.click(screen.getByText(/Реєстрація/i));
    expect(mockSet).toHaveBeenCalledWith('register');
  });
});