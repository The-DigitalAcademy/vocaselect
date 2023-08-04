const { OpenAIApi } = require("openai");
const configuration = require("../config/openaiConfig");
const openai = new OpenAIApi(configuration);

const axios = require('axios');

exports.generateCareerQuiz = async (req, res) => {
  try {
    const {
      answer1,
      answer2,
      answer3,
    } = req.body;

    const prompt = `Quiz for Career Recommendation:\n
    1. What are your strengths? (${answer1})\n
    2. What subjects do you enjoy the most? (${answer2})\n
    3. Are you interested in working with people or technology? (${answer3})\n

Based on your answers, please recommend a maximum of six careers  and short description of what each profession does layman's terms (like you are explaining to a 5-year-old) in South Africa. Format the response JSON Format.`;

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.6,
      max_tokens: 1000,
    });

    const careerRecommendations = completion.data.choices[0].text;

    // Assuming career recommendations are separated by lines
    const recommendedCareers = careerRecommendations.split('\n');

    // Filter out empty lines and display at least 4 suitable careers
    const suitableCareers = recommendedCareers.filter(career => career.trim() !== '');
    const displayedCareers = suitableCareers.slice(0, Math.min(4, suitableCareers.length));

    const jsonResult = { recommendations: displayedCareers };
    res.status(200).json(jsonResult);

  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: "An error occurred while generating recommendations." });
  }
};

