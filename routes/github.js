import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

// Substitua USERNAME pelo seu usuário GitHub
const GITHUB_USER = 'USERNAME';

router.get('/', async (req, res) => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar projetos' });
  }
});

export default router;
