import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';

describe('Login Component Tests', () => {
  test('checks login attempt with empty fields (shows alert)', () => {
    window.alert = jest.fn();
    render(<Login onLogin={() => {}} setPage={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: /Увійти/i }));
    expect(window.alert).toHaveBeenCalled();
  });

  test('checks login attempt with valid credentials', () => {
    const user = { email: 'admin@test.com', password: '123' };
    localStorage.setItem('user', JSON.stringify(user));
    const mockLogin = jest.fn();
    render(<Login onLogin={mockLogin} setPage={() => {}} />);
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'admin@test.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Пароль/i), { target: { value: '123' } });
    fireEvent.click(screen.getByRole('button', { name: /Увійти/i }));
    expect(mockLogin).toHaveBeenCalled();
  });
});