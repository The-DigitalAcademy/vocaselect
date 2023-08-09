const { OpenAIApi } = require("openai");
const configuration = require("../config/openaiConfig");
const openai = new OpenAIApi(configuration);

const axios = require('axios');

exports.generateCourse = async (req, res) => {
  try {
    const { enterCareer} = req.body;
    const prompt = `Provide South African courses recommendation based on the entered career.
    Recommend universities, maximum of six courses (only one course per university ) and a short description of the course from the university prospectus for a ${enterCareer} in South Africa. 
  
    Provide uniName, courseName, courseDescription, admissionRequirements. This must be returned as a stringified JSON object.
  
    Explain the course description and admission requirement in layman's terms for high school minors of age 15 years to understand.
  
    The object must have the following structure: { uniName: string, courseName: string, courseDescription: string, admissionRequirements: string }
  
    Here is an example: 
    [
      {
        "uniName": "University of Johannesburg",
        "courseName": "Bachelor of Science in Computer Science",
        "courseDescription": "course description example",
        "admissionRequirements": "admission example"
      },
      {
        "uniName": "University of Pretoria",
        "courseName": "Bachelor of Science in Information Systems",
        "courseDescription": "course description example",
        "admissionRequirements": "admission example"
      },
    ]
  `;
    
    // Generate course recommendations using the OpenAI API
    const {data} = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.6,
      max_tokens: 1000,
    });
    
    
    // Extract the course recommendations text from the API response
    const courseRecommendations = data.choices[0].text;

    // Parse the course recommendations text into structured course objects
    const courses = parseCourseRecommendations(courseRecommendations);

    // Send the parsed course recommendations as a JSON response
    res.status(200).json(courses);


    
  } catch (err) {
    // Handle errors and send an error response if an exception occurs
    console.error("Error occurred:", err);
    res.status(500).json({ error: "An error occurred while generating recommendations." });
  }
};

// Function to parse course recommendations text into structured course objects
function parseCourseRecommendations(text) {
  const courses = [];
  const lines = text.split('\n');

  let currentCourse = {};
  for (const line of lines) {
    const [key, value] = line.split(':').map(part => part.trim());

    if (key && value) {
      currentCourse[key] = value;
    } else if (Object.keys(currentCourse).length > 0) {
      courses.push(currentCourse);
      currentCourse = {};
    }
  }

  if (Object.keys(currentCourse).length > 0) {
    courses.push(currentCourse);
  }

  return courses;
}

