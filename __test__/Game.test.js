import { render, screen, fireEvent } from '@testing-library/react';
import Game from '../Game';

describe('Game Logic Tests', () => {
  test('checks cell click updates board with X', () => {
    render(<Game />);
    const cells = screen.getAllByRole('button');
    fireEvent.click(cells[0]);
    expect(cells[0].textContent).toBe('X');
  });

  test('checks board reset attempt', () => {
    render(<Game />);
    const cells = screen.getAllByRole('button');
    const resetBtn = screen.getByText(/Очистити/i);
    fireEvent.click(cells[0]);
    fireEvent.click(resetBtn);
    expect(cells[0].textContent).toBe('');
  });
});