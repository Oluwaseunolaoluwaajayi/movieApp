// auth.js

import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth'; // ✅ Adjust if deploying

export const registerUser = (form) => axios.post(`${API_URL}/register`, form);



export const loginUser = async (formData) => {
  const res = await axios.post(`${API_URL}/login`, formData);
  return res.data;
};


// ✅ Add this for protected route

    // services/auth.js
export const getUserProfile = (token) =>
  axios.get('http://localhost:5001/api/auth/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


