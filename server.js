const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || 'AIzaSyA95NrEXY57ypZpDgHv7PtJHdjUy-SCvU4'; // Ta clé Gemini ici

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt est requis' });

  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generate',
      {
        prompt: {
          text: prompt,
        },
        temperature: 0.7,
        maxOutputTokens: 500,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GOOGLE_API_KEY}`,
        },
        params: {
          key: GOOGLE_API_KEY,
        },
      }
    );

    const text = response.data?.candidates?.[0]?.output || 'Pas de réponse';
    res.json({ response: text });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Erreur lors de la génération' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});