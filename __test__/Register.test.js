import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../Register';

describe('Register Component Tests', () => {
  test('checks register attempt with filled inputs', () => {
    const mockReg = jest.fn();
    render(<Register onRegister={mockReg} />);
    fireEvent.change(screen.getByPlaceholderText(/Nickname/i), { target: { value: 'User1' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'u1@m.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Зареєструватися/i }));
    expect(JSON.parse(localStorage.getItem('user')).name).toBe('User1');
  });
});