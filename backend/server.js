// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import moviesRoutes from './routes/movies.js';
import userRoutes from './routes/user.js'; // Add this line at the top
import userRoutes from './routes/users.js';

dotenv.config(); // Load environment variables

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/movies', moviesRoutes);
app.use('/api/user', userRoutes);

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: 'movieApp',
  })
  .then(() => console.log('✅ MongoDB connected to Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Base route
app.get('/', (req, res) => {
  res.send('🎬 Movie Recommendation API is running...');
});

// ✅ Server listen
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
