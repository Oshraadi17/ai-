
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/analyze', async (req, res) => {
  try {
    const userInput = req.body.message;

    const gptResponse = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [{ role: 'user', content: userInput }],
      max_tokens: 150,
    });

    res.json({ reply: gptResponse.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect to OpenAI.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
