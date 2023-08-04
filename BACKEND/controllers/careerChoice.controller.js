const { OpenAIApi } = require("openai");
const configuration = require("../config/openaiConfig");
const openai = new OpenAIApi(configuration);

const axios = require('axios');

exports.generateCareer = async (req, res) => {
  try {
    const { careerChoice} = req.body;
    const prompt = `Please recommend a maximum of six courses (only one course per university) and short description which is explained in laymans terms like to a 5 year old for this career ${careerChoice} in South Africa. Add also a faculty prospectus and admission criteria (laymans terms like to a 5 year old) for that specific course. Format the response JSON Format`;
    
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.6,
      max_tokens: 1000,
    });
    
    // console.log(completion.data.choices[0].text)

    const careerRecommendations = completion.data.choices[0].text;
    const jsonResult = { CourseRecommendations: careerRecommendations.split('\n') };
    res.status(200).json(jsonResult);

    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: "An error occurred while generating recommendations." });
  }
};


