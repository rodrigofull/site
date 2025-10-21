import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

// Substitua pela sua API key e ID do canal
const API_KEY = 'YOUR_YOUTUBE_API_KEY';
const CHANNEL_ID = 'YOUR_CHANNEL_ID';

router.get('/', async (req, res) => {
  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=5`);
    const data = await response.json();
    res.json(data.items);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar vídeos' });
  }
});

export default router;
