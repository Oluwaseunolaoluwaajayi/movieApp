import axios from 'axios';

const BASE_URL = 'http://localhost:5001/api/auth';

async function registerUser(email, password, username) {
  try {
    const res = await axios.post(`${BASE_URL}/register`, {
      email,
      password,
      username,
    });
    console.log(`✅ Registered: ${res.data.username || 'User'}`);
  } catch (err) {
    if (err.response) {
      console.error('❌ Registration failed:', err.response.data.message);
    } else {
      console.error('❌ Registration error:', err.message);
    }
  }
}

async function loginUser(email, password) {
  try {
    const res = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    console.log('✅ Login successful!');
    console.log('🔐 Token:', res.data.token);
  } catch (err) {
    if (err.response) {
      console.error('❌ Login failed:', err.response.data.message);
    } else {
      console.error('❌ Login error:', err.message);
    }
  }
}

// CLI
const [,, command, email, password, username] = process.argv;

if (command === 'register') {
  if (!email || !password || !username) {
    console.log('\nUsage:\n  Register: node testUsers.js register <email> <password> <username>');
  } else {
    await registerUser(email, password, username);
  }
} else if (command === 'login') {
  if (!email || !password) {
    console.log('\nUsage:\n  Login: node testUsers.js login <email> <password>');
  } else {
    await loginUser(email, password);
  }
} else {
  console.log('\nUsage:\n  Register: node testUsers.js register <email> <password> <username>\n  Login:    node testUsers.js login <email> <password>');
}
