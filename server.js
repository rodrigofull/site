import express from 'express';
import cors from 'cors';
import githubRoutes from './routes/github.js';
import youtubeRoutes from './routes/youtube.js';

const app = express();
app.use(cors());
app.use(express.json());

// Rotas de integração
app.use('/api/github', githubRoutes);
app.use('/api/youtube', youtubeRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
