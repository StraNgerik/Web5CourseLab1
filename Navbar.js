const Navbar = ({ setPage }) => (
  <nav style={{ padding: '15px', background: '#282c34', color: 'white', display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px' }}>
    <span style={{ cursor: 'pointer' }} onClick={() => setPage('login')}>Вхід</span>
    <span style={{ cursor: 'pointer' }} onClick={() => setPage('register')}>Реєстрація</span>
    <span style={{ cursor: 'pointer' }} onClick={() => setPage('about')}>Про нас</span>
  </nav>
);

export default Navbar;