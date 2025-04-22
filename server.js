
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const OpenAI = require("openai");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// שרת קבצים סטטיים
app.use(express.static(__dirname));

// חיבור ל-OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/analyze', async (req, res) => {
  try {
    const userInput = req.body.message;

    const gptResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: userInput }],
      max_tokens: 150
    });

    res.json({ reply: gptResponse.choices[0].message.content });
  } catch (error) {
    console.error("GPT ERROR:", error);
    res.status(500).json({ error: "Failed to connect to OpenAI." });
  }
});

// לכל בקשה אחרת – החזר את index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
