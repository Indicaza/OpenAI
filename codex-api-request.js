const axios = require("axios");
const fs = require("fs");
require("dotenv").config();

function generateText(prompt) {
  const apiKey = process.env.API_KEY;
  const client = axios.create({
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const params = {
    prompt: prompt,
    model: "text-davinci-003",
    temperature: 0.5,
    max_tokens: 1000,
  };

  return client
    .post("https://api.openai.com/v1/completions", params)
    .then((result) => {
      console.log(result.data.choices[0].text);
      const data = {
        prompt: prompt,
        result: result.data.choices[0].text,
      };
      fs.appendFile("data.json", JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log("*");
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = { generateText };
