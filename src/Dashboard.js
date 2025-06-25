import React from 'react';
import { useAuth } from './AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div style={styles.container}>
      <h2>📊 Dashboard</h2>
      <p>Bem-vindo(a), <strong>{user?.name}</strong>!</p>
      <button onClick={logout} style={styles.button}>Sair</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    textAlign: 'center',
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Dashboard;
