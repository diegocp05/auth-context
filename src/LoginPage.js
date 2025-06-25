import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleLogin = () => {
    if (username.trim()) {
      login(username);
      navigate(from, { replace: true });
    } else {
      alert('Digite um nome para continuar.');
    }
  };

  return (
    <div style={styles.card}>
      <h2>🔐 Login</h2>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <button
        onClick={handleLogin}
        disabled={!username.trim()}
        style={styles.button}
      >
        Entrar
      </button>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default LoginPage;
