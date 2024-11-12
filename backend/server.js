import express from 'express';
import mongoose from './config/db.js';  // Use .js extensions for imports
import authRoutes from './routes/authRoutes.js';
import objectRoutes from './routes/objectRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/objects', objectRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
