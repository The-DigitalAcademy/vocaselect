const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.apiKey
});

module.exports = configuration;


// const openai = new OpenAIApi(configuration);