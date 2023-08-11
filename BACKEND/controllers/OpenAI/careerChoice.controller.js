const { OpenAIApi } = require("openai");
const configuration = require("../../config/openaiConfig");
const openai = new OpenAIApi(configuration);

// const axios = require('axios');

exports.generateCareer = async (req, res) => {
  try {
    const { careerChoice} = req.body;
    const prompt = `Please recommend a maximum of six courses (only one course per university) and short description which is explained in laymans terms like to a 5 year old for this career ${careerChoice} in South Africa. Add also a faculty prospectus and admission criteria (laymans terms like to a 5 year old) for that specific course. Format the response JSON Format
    
    This must be returned as a stringified JSON object.
  
    Explain the course description and admission requirement in layman's terms for high school minors of age 15 years to understand.
  
    The object must have the following structure: { uniName, courseName, courseDescription, admissionRequirements }
  
    Here is an example: 
    [
      {
        uniName: University of Johannesburg
        courseName: Bachelor of Science in Computer Science
        courseDescription: course description example
        admissionRequirements: admission example
      },
      {
        uniName: University of Pretoria
        courseName: Bachelor of Science in Information Systems
        courseDescription: course description example,
        admissionRequirements: admission example
      },
    ]
    `;
    
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.6,
      max_tokens: 1000,
    });
    
    // console.log(completion.data.choices[0].text)

     // Extract the course recommendations text from the API response
     const courseRecommendations = completion.data.choices[0].text;

     // Parse the course recommendations text into structured course objects
     const courses = parseCourseRecommendations(courseRecommendations);
 
     // Send the parsed course recommendations as a JSON response
     res.status(200).json(courses);
    
  } catch (err) {
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

