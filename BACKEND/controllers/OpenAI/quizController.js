const { OpenAIApi } = require("openai");
const configuration = require("../../config/openaiConfig");
const openai = new OpenAIApi(configuration);
// const QuizAnswer = require("../../models/quizAnswers.model"); // Import your Sequelize model here
// const db = require("../../config/db.config");

exports.generateCareerQuiz = async (req, res) => {
  try {
    const {
      answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9, answer10
    } = req.body;

    // Check if all answers are provided
    // if (!answer1 || !answer2 || !answer3 || !answer4 || !answer5 || !answer6 || !answer7 || !answer8 || !answer9 || !answer10) {
    //   return res.status(400).json({ error: "All answers are required." });
    // }

    const prompt = `Quiz for Career Recommendation:\n
    1. What's your favorite way to spend free time? (${answer1})\n
    2. How would you describe your personality? (e.g., outgoing, analytical, creative, etc.) (${answer2})\n
    3. Do you enjoy teamwork or individual work more? (${answer3})\n
    4. What subjects or topics fascinate you? (${answer4})\n
    5. Do you prefer a fast-paced and dynamic work environment or a more relaxed one? (${answer5})\n
    6. Are you drawn to routine or unpredictability? (${answer6})\n
    7. Are you looking for stability, flexibility, growth opportunities, or a mix of these in a job? (${answer7})\n
    8. Would you rather master one skill or learn many? (${answer8})\n
    9. How do you handle risk? (${answer9})\n
    10. What's your dream way to spend a year off work? (${answer10})\n

    Based on your answers, please recommend a maximum of 4 (four) careers and short interesting  description of what each profession does in layman's terms to appeal to younger people(like you are explaining to a 5-year-old) in South Africa. Format the response in JSON  representation.
    
    Follow this object:
    [
      career1:
      {
        careerName: University of Johannesburg,
        careerDescription: sample description like explaining to 5 year old,
        careerSalary: Rand - month salary,
      },
      career2
      {
        careerName: university name,
        careerDescription: sample description like explaining to 5 year old,
        careerSalary: Rand - month salary,
      },
      so on....
    ]    
    `;

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.5,
      max_tokens: 1000,
    });

    const careerRecommendations = completion.data.choices[0].text;

    // Assuming career recommendations are separated by lines
    const recommendedCareers = careerRecommendations.split('\n');

    // Filter out empty lines and display at least 4 suitable careers
    const suitableCareers = recommendedCareers.filter(career => career.trim() !== '');
    console.log(suitableCareers)

    const displayedCareers = suitableCareers.slice(0, Math.min(22, suitableCareers.length)); 

    const jsonResult = { displayedCareers };

    // // Assuming you have a Sequelize model QuizAnswer to store the generated recommendations
    // const quizAnswers = {
    //   answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10,
    //   careerRecommendations: JSON.stringify(jsonResult.quizRecommendations) // Store the recommendations as JSON
    // };

    // Use Sequelize's create method to insert the quiz answers and recommendations into the database
    // await QuizAnswer.create(quizAnswers);

    res.status(200).json(jsonResult);

  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: "An error occurred while generating recommendations." });
  }
};

