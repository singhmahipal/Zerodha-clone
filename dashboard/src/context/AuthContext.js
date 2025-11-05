import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await axios.post(
        `${process.env.BACKEND_URL}/auth/verify`,
        {},
        { withCredentials: true }
      );
      
      if (res.data.status) {
        setUser(res.data.user);
        setIsAuthenticated(true);
      } else {
        // Redirect to login if not authenticated
        window.location.href = `${process.env.FRONTEND_URL}/login`;
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      window.location.href = `${process.env.FRONTEND_URL}/login`;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${process.env.BACKEND_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      window.location.href = `${process.env.FRONTEND_URL}`;
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    logout,
    checkAuth
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.5rem',
        color: '#666'
      }}>
        Loading...
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};