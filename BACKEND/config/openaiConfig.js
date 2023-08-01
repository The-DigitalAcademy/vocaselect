const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  // apiKey: "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",
  apiKey: process.env.OpenAIApi
});

module.exports = configuration;


// const openai = new OpenAIApi(configuration);