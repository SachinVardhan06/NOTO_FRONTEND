import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './src/components/Navbar';

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900">
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;