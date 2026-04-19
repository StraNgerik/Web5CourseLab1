import { render, screen } from '@testing-library/react';
import Profile from '../Profile';

describe('Profile Component Tests', () => {
  test('checks displaying of user data when authorized', () => {
    const user = { name: 'Tester', email: 'test@mail.com', sex: 'Чоловіча', birthDate: '2000-01-01' };
    localStorage.setItem('user', JSON.stringify(user));
    render(<Profile setPage={() => {}} />);
    expect(screen.getByText(/Tester/i)).toBeInTheDocument();
  });

  test('checks presence of PLAY and About Us buttons', () => {
    render(<Profile setPage={() => {}} />);
    expect(screen.getByRole('button', { name: /PLAY/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /About Us/i })).toBeInTheDocument();
  });
});