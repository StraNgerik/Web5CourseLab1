import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Game from './components/Game';
import About from './components/About';

export default function App() {
  const [page, setPage] = useState(() => localStorage.getItem('currentPage') || 'login');

  useEffect(() => {
    localStorage.setItem('currentPage', page);
  }, [page]);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      {page !== 'game' && <Navbar setPage={setPage} />}
      
      {page === 'login' && <Login onLogin={() => setPage('profile')} setPage={setPage} />}
      {page === 'register' && <Register onRegister={() => setPage('login')} />}
      {page === 'profile' && <Profile setPage={setPage} />}
      {page === 'about' && <About setPage={setPage} />}
      
      {page === 'game' && (
        <div style={{ marginTop: '40px' }}>
          <Game />
          <div style={{textAlign: 'center', marginTop: '20px'}}>
            <button onClick={() => setPage('profile')}>← Назад до профілю</button>
          </div>
        </div>
      )}
    </div>
  );
}