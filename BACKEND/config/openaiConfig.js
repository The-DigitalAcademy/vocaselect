const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: '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'
})

module.exports = configuration;


// const openai = new OpenAIApi(configuration);