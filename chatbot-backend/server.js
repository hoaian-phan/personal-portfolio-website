import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temparture: 0.6,
    maxTokens: 100,
    messages: [
      {
        role: "system",
        content: "You are a personal marketer for a software engineer. You can provide information about her",
      },
      ...chats,
    ],
  });

  res.json({
    output: result.data.choices[0].message,
  });

  result().catch(error => {
    console.error('Failed to generate response:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

