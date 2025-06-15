// context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';




export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
  if (token) {
    const decoded = jwt_decode(token); // install via: npm install jwt-decode
    setUser(decoded);
  }
}, [token]);
  const login = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
