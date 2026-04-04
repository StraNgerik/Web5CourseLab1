import React, { useState } from 'react';

const Login = ({ onLogin, setPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    const savedUser = JSON.parse(localStorage.getItem('user'));

    // Перевірка обох полів
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      onLogin();
    } else {
      alert('Невірний email або пароль!');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Вхід</h2>
      <div style={{ display: 'inline-flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <input 
          style={{padding: '8px'}} 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          style={{padding: '8px'}} 
          type="password" 
          placeholder="Пароль" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button style={{padding: '10px', cursor: 'pointer'}} onClick={handleLoginClick}>
          Увійти
        </button>
        <p style={{ fontSize: '14px' }}>
          Не маєте акаунту? <span style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setPage('register')}>Реєстрація</span>
        </p>
      </div>
    </div>
  );
};

export default Login;