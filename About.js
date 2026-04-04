const About = ({ setPage }) => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <div style={{ fontSize: '60px', marginBottom: '10px' }}>⭕❌</div>
    <h2 style={{ color: '#282c34' }}>Tic-Tac-Toe v1.0</h2>
    <p style={{ maxWidth: '400px', margin: '0 auto 20px auto', lineHeight: '1.6' }}>
      Цей веб-додаток розроблено в рамках Лабораторної роботи №1. 
      Він демонструє базові можливості ReactJS: роботу зі станом, 
      маршрутизацію між сторінками та взаємодію з LocalStorage.
    </p>
    <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px', marginTop: '20px' }}>
      <p><b>Розробник:</b> Бичко К.В</p>
      <p><b>Група:</b> КВ-51мн</p>
    </div>
    
    {/* Кнопка повернення */}
    <button 
      onClick={() => setPage('profile')} 
      style={{ 
        marginTop: '30px', 
        padding: '10px 20px', 
        cursor: 'pointer',
        background: '#61dafb',
        border: 'none',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}
    >
      ← Повернутися до профілю
    </button>
  </div>
);

export default About;