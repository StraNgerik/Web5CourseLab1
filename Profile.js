const Profile = ({ setPage }) => {
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'Гість', email: '-', sex: '-', birthDate: '-' };
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Профіль користувача</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <tbody>
          <tr><td style={{padding: '10px'}}><b>Nickname:</b></td><td>{user.name}</td></tr>
          <tr><td style={{padding: '10px'}}><b>Email:</b></td><td>{user.email}</td></tr>
          <tr><td style={{padding: '10px'}}><b>Стать:</b></td><td>{user.sex}</td></tr>
          <tr><td style={{padding: '10px'}}><b>Дата народження:</b></td><td>{user.birthDate}</td></tr>
        </tbody>
      </table>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setPage('game')} style={{ padding: '15px 30px', fontSize: '18px', background: 'green', color: 'white', cursor: 'pointer', border: 'none', borderRadius: '5px' }}>PLAY</button>
        <button onClick={() => setPage('about')} style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer' }}>About Us</button>
      </div>
    </div>
  );
};

export default Profile;