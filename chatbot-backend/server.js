
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const { Configuration, OpenAIApi } = require("openai");


app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});

