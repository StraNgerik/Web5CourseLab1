import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [form, setForm] = useState({ name: '', email: '', sex: 'Чоловіча', birthDate: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Зберігаємо весь об'єкт разом із паролем
    localStorage.setItem('user', JSON.stringify(form));
    alert('Реєстрація успішна! Тепер увійдіть.');
    onRegister();
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Реєстрація</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <input placeholder="Nickname" required style={{padding: '8px'}} onChange={e => setForm({...form, name: e.target.value})} />
        <input placeholder="Email" type="email" required style={{padding: '8px'}} onChange={e => setForm({...form, email: e.target.value})} />
        
        {/* Поле пароля повернулося */}
        <input placeholder="Пароль" type="password" required style={{padding: '8px'}} onChange={e => setForm({...form, password: e.target.value})} />
        
        <select style={{padding: '8px'}} onChange={e => setForm({...form, sex: e.target.value})}>
          <option value="Чоловіча">Чоловіча</option>
          <option value="Жіноча">Жіноча</option>
        </select>
        <input type="date" required style={{padding: '8px'}} onChange={e => setForm({...form, birthDate: e.target.value})} />
        
        <button type="submit" style={{padding: '10px', cursor: 'pointer', background: '#282c34', color: 'white'}}>
          Зареєструватися
        </button>
      </form>
    </div>
  );
};

export default Register;