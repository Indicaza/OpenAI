const { generateText } = require("./codex-api-request.js");
const readlineSync = require("readline-sync");

const prompt = readlineSync.question("Prompt:  ");
generateText(prompt);
