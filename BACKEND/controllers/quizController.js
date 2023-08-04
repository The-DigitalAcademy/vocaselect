const { OpenAIApi } = require("openai");
const configuration = require("../config/openaiConfig");
const openai = new OpenAIApi(configuration);

const axios = require('axios');

exports.generateCareerQuiz = async (req, res) => {
  try {
    const {
      answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9, answer10
    } = req.body;

    const prompt = `Quiz for Career Recommendation:\n
    1. What are your favorite subjects or topics to learn about? (${answer1})\n
    2. What do you enjoy doing in your free time? (${answer2})\n
    3. How would you describe your personality? (e.g., outgoing, analytical, creative, etc.) (${answer3})\n
    4. What are your long-term career goals? (${answer4})\n
    5. Are you interested in remote work or prefer on-site positions? (${answer5})\n
    6. Are you willing to undergo additional training or education to pursue a dream job? (${answer6})\n
    7. Have you ever volunteered or had job previous? (${answer7})\n
    8. What job roles or positions have you always been curious about? (${answer8})\n
    9. Are you willing to invest extra hours for a job you're passionate about? (${answer9})\n
    10. Is there any other information about yourself or your aspirations that you would like to share? (${answer10})\n

    Based on your answers, please recommend a maximum of six careers  and short interesting  description of what each profession does layman's terms to appeal to younger people(like you are explaining to a 5-year-old) in South Africa. Format the response JSON Format.`;

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 1000,
    });

    const careerRecommendations = completion.data.choices[0].text;

    // Assuming career recommendations are separated by lines
    const recommendedCareers = careerRecommendations.split('\n');

    // Filter out empty lines and display at least 4 suitable careers
    const suitableCareers = recommendedCareers.filter(career => career.trim() !== '');
    const displayedCareers = suitableCareers.slice(0, Math.min(6, suitableCareers.length));

    const jsonResult = { quizRecommendations: displayedCareers };
    res.status(200).json(jsonResult);

  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: "An error occurred while generating recommendations." });
  }
};

