import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </nav>
      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

const styles = {
  nav: {
    display: 'flex',
    gap: '20px',
    padding: '10px 20px',
    backgroundColor: '#333',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  main: {
    padding: '20px'
  }
};

export default Layout;
