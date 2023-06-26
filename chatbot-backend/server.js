import { Configuration, OpenAIApi } from "openai";
import express from "express";
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3001
app.use(express.json());
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function sendTextToOpenAI(text) {
  try {
    console.log(text);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.log(error.response.data);
  }
}

app.post('/api/chatbot', async (req, res) => {
  try {
    const response = await sendTextToOpenAI(req.body.text);
    res.json({ reply: response });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error connecting to OpenAI.' });
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

