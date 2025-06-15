import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getUserProfile } from '../services/auth';

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setAuthorized(false);
      setIsLoading(false);
      return;
    }

    getUserProfile(token)
      .then(() => {
        setAuthorized(true);
        setIsLoading(false);
      })
      .catch(() => {
        setAuthorized(false);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!authorized) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
