const { OpenAIApi } = require("openai");
const configuration = require("../../config/openaiConfig");
const openai = new OpenAIApi(configuration);
// const QuizAnswer = require("../../models/quizAnswers.model"); // Import your Sequelize model here
// const db = require("../../config/db.config");
const db = require("../../models");
const Career = db.Career;


// const User = db.User;
exports.generateCareerQuiz = async (req, res) => {
  try {
    const {
      answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9, answer10
    } = req.body;

    const prompt = `Quiz for Career Recommendation:\n
    1. What do you enjoy doing in your spare time? (${answer1})\n
    2. How would you describe your personality? (e.g., outgoing, analytical, creative, etc.) (${answer2})\n
    3. Do you enjoy teamwork or individual work more? (${answer3})\n
    4. What subjects or topics do you find the most interesting? (${answer4})\n
    5. Do you thrive in a fast-paced environment where tasks change frequently, or do you prefer a more structured and consistent pace of work? (${answer5})\n

    6. Are you drawn to routine or unpredictability? (${answer6})\n
    7. Are you looking for stability, flexibility, growth opportunities, or a mix of these in a job? (${answer7})\n
    8. Would you rather master one skill or learn many? (${answer8})\n
    9. How do you typically react when faced with challenges (${answer9})\n
    10. What's your dream way to spend a year off work? (${answer10})\n

    Based on your user answers, please recommend a maximum of 4 (four) careers and short interesting  description of what each profession does in simple terms like you are explaining to a 5-year-old. Provide only information for South Africa. 
    Admission Criteria must be explained in maximum of 200 words.

    Format the response in JSON  representation.
    
    The JSON Format object must have the following structure:
    [
      {
        careerName: sample career,
        careerDescription: sample description like explaining to 5 year old 
        careerSalary: share the estimation of how much each career makes in a month (in Rands),
      },
      {
        careerName: sample  career,
        careerDescription: sample description like explaining to 5 year 
        careerSalary: share the estimation of how much each career makes in a month (in Rands),
      },
      so on....
    ]    
    `;

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.9,
      max_tokens: 1000,
    });

    const careerRecommendations = completion.data.choices[0].text;

    // Parse the course recommendations text into structured course objects
    const careers = parseCareerRecommendation(careerRecommendations);

    const extractedCareers = [];

    for (const career of careers) {
      // Extract the value of the 'careerName' property from the current 'career' object
      const careerName = career.careerName;
      const careerDescription = career.careerDescription;
      const careerSalary = career.careerSalary;

      const extractedCareer = {
        careerName,
        careerDescription,
        careerSalary,
      };
      extractedCareers.push(extractedCareer);

    }
   
   // Store the extracted careers in the database
  //  await storeCareersInDatabase(extractedCareers);

   // Send the extracted course recommendations as a JSON response
   res.status(200).json(extractedCareers);

  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: "An error occurred while generating recommendations." });
  }
};

//Function for posting data into the database
// async function storeCareersInDatabase(careers) {
//   try {
//     for (const career of careers) {
//       const { careerName, careerDescription, careerSalary } = career;

//       // Create a new career record in the database
//       await db.Career.create({
//         careerName,
//         careerDescription,
//         careerSalary,
//       });
//     }

//     console.log('Careers have been successfully stored in the database.');
//   } catch (error) {
//     console.error('Error occurred while storing careers in the database:', error);
//   }
// }


// getting all careers


exports.getAllCareers = async (req, res) => {
  try {
    // Fetch all careers from the database
    const careers = await db.Career.findAll();

    // Check if there are any careers in the database
    if (!careers || careers.length === 0) {
      return res.status(404).json({ error: 'No careers found in the database.' });
    }

    // Send the list of careers as a JSON response
    res.status(200).json(careers);
  } catch (error) {
    console.error('Error occurred while fetching careers from the database:', error);
    res.status(500).json({ error: 'An error occurred while fetching careers from the database.' });
  }
};


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