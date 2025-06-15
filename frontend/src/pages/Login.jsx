import { useState } from 'react';
import { loginUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import './login.css'; // ✅ Keep this
import bgImage from '../assets/login-bg.jpg'; // ✅ Assuming the image is inside src/assets

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginUser(form);
      localStorage.setItem('token', token);
      navigate('/profile');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${bgImage})` }} // ✅ Correct inline style
    >
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>! Welcome !</h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
