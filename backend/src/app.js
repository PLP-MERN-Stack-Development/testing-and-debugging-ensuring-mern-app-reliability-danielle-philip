import express from 'express';
import cors from 'cors';
import bugRoutes from './routes/bugRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/bugs', bugRoutes);

// health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use(errorHandler);

export default app;
