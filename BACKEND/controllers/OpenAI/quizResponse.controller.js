const { OpenAIApi } = require("openai");
const configuration = require("../../config/openaiConfig");
const openai = new OpenAIApi(configuration);
const QuizAnswer = require("../../models/quizAnswers.model"); 
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
    
    The JSON Format object must have the following structure:
    [
      {
        careerName: sample career,
        careerDescription: sample description like explaining to 5 year old,
        careerSalary: Rand - month salary estimation,
      },
      {
        careerName: sample  career,
        careerDescription: sample description like explaining to 5 year old,
        careerSalary: Rand - month salary estimation,
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

    // Parse the course recommendations text into structured course objects
    const careers = parseCareerRecommendation(careerRecommendations);

    const extractedCareers = [];

    for (const career of careers) {
      // If 'career.careerName' is falsy, assign an empty string to 'uniName'
      const careerName = career.careerName || "";
      // If 'course.courseName' is falsy, assign an empty string to 'courseName'
      const careerDescription = career.careerDescription || "";
  
      const careerSalary = career.careerSalary || "";

      // Create an object containing extracted course information and push it to 'extractedCourses' array
      extractedCareers.push({
        careerName,
        careerDescription,
        careerSalary,
      });
    }

   // Send the extracted course recommendations as a JSON response
   res.status(200).json(extractedCareers);


    // // Assuming you have a Sequelize model QuizAnswer to store the generated recommendations
    // const quizAnswers = {
    //   answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10,
    //   careerRecommendations: JSON.stringify(jsonResult.quizRecommendations) // Store the recommendations as JSON
    // };

    // Use Sequelize's create method to insert the quiz answers and recommendations into the database
    // await QuizAnswer.create(quizAnswers);

    // res.status(200).json(jsonResult);

  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: "An error occurred while generating recommendations." });
  }
};

exports.getAllResponses = async (req, res) => {
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
    
    The JSON Format object must have the following structure:
    [
      {
        careerName: sample career,
        careerDescription: sample description like explaining to 5 year old,
        careerSalary: Rand - month salary estimation,
      },
      {
        careerName: sample  career,
        careerDescription: sample description like explaining to 5 year old,
        careerSalary: Rand - month salary estimation,
      },
      so on....
    ]    
    `;
    const allResponses = await fetchAllResponsesFromDatabase();

    const extractedResponses = [];

    for (const response of allResponses) {
      const {
        answer1, answer2, answer3, answer4, answer5,
        answer6, answer7, answer8, answer9, answer10
      } = response;

      // Construct the prompt with user's answers
      const userPrompt = prompt
        .replace("(${answer1})", answer1)
        .replace("(${answer2})", answer2)
        .replace("(${answer3})", answer3)
        .replace("(${answer4})", answer4)
        .replace("(${answer5})", answer5)
        .replace("(${answer6})", answer6)
        .replace("(${answer7})", answer7)
        .replace("(${answer8})", answer8)
        .replace("(${answer9})", answer9)
        .replace("(${answer10})", answer10);

      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: userPrompt,
        temperature: 0.5,
        max_tokens: 1000,
      });


    const careerRecommendations = completion.data.choices[0].text;

    const careers = parseCareerRecommendation(careerRecommendations);

      extractedResponses.push({
        userAnswers: response,
        recommendedCareers: careers,
      });
    }
    res.status(200).json(extractedResponses);

  } catch (err) {
  console.error("Error occurred:", err);
  res.status(500).json({ error: "An error occurred while fetching responses." });
  }
};

async function fetchAllResponsesFromDatabase() {
  try {
    const allResponses = await QuizAnswer.findAll(); // Use the appropriate Sequelize method to fetch all responses
    return allResponses;
  } catch (error) {
    throw error;
  }
}

// Function to parse course recommendations text into structured course objects
function parseCareerRecommendation(text) {
  const careers = [];
  const lines = text.split('\n');

  let currentCareer = {};
  for (const line of lines) {
    const [key, value] = line.split(':').map(part => part.trim());

    if (key && value) {
      currentCareer[key] = value;
    } else if (Object.keys(currentCareer).length > 0) {
      careers.push(currentCareer);
      currentCareer = {};
    }
  }

  if (Object.keys(currentCareer).length > 0) {
    careers.push(currentCareer);
  }

  return careers;
}
 

