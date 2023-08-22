const { OpenAIApi } = require("openai");
const configuration = require("../../config/openaiConfig");
const openai = new OpenAIApi(configuration);

// const axios = require('axios');

//@POST - METHOD
exports.selectedCourse = async (req, res) => {
  try {
    
    //uses the body-parser middleware - destructuring assigment
    // Extract the user's chosen career choice from the request body
    const {  course } = req.body;

     // Check if the careerChoice is provided
    //  if (!course || course.trim() === "") {
    //   return res.status(400).json({ error: "Please provide a valid career choice." });
    // }

    //AI prompt 
    const prompt = `Please provide all the universities in South Africa that are offering this course ${course}.

    Provide all the list of top 5 universities, course duration, admission requirements, and career opportunities for that specific course.
    
    The JSON Format object must have the following structure:
    [
      {
        uniName: University of Johannesburg,
        courseName: Bachelor of Science in Computer Science,
        courseDuration: 3 years,
        courseDescription: Course description example,
        admissionRequirements: Admission example,
        universityURL: uniUrl

      },
      {
        uniName: University of Pretoria,
        courseName: Bachelor of Science in Computer Science,
        courseDuration: 3 years,
        courseDescription: Course description example,
        admissionRequirements: Admission example,
        universityURL: uniUrl
      }
    ]    
    `;

   //asking the AI to complete the prompt you've provided with additional text
   const completion = await openai.createCompletion({
     model: "text-davinci-003",
     prompt,
     temperature: 0.8,
     max_tokens: 1000,
   });

     // Extract the course recommendations text from the API response
     const courseRecommendations = completion.data.choices[0].text;

     // Parse the course recommendations text into structured course objects
     const courses = parseCourseRecommendations(courseRecommendations);
 
     const extractedCourses = [];

     for (const course of courses) {
      // If 'course.uniName' is falsy, assign an empty string to 'uniName'
      const uniName = course.uniName || "";
      // If 'course.courseName' is falsy, assign an empty string to 'courseName'
      const courseName = course.courseName || "";

      const courseDescription = course.courseDescription || "";

      const courseDuration = course.courseDuration || "";

      const admissionRequirements = course.admissionRequirements || "";
  
      

      // Create an object containing extracted course information and push it to 'extractedCourses' array
      extractedCourses.push({
        uniName,
        courseName,
        courseDuration,
        courseDescription,
        admissionRequirements, 
      });
    }
     // Send the extracted course recommendations as a JSON response
    res.status(200).json(extractedCourses);

    console.log(extractedCourses);

  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: "An error occurred while generating recommendations." });
  }
};

//@GET - METHOD
exports.getSelectedCourses = async (req, res) => {
  try {
    
    //uses the body-parser middleware - destructuring assigment
    // Extract the user's chosen course from the request body
    const {  course } = req.query;

     // Check if the careerChoice is provided
    //  if (!course || course.trim() === "") {
    //   return res.status(400).json({ error: "Please provide a valid career choice." });
    // }

    //AI prompt 
    const prompt = `Please provide all the universities in South Africa that are offering this course ${course}.

    Provide all the list of top 5 universities, course duration, admission requirements, and career opportunities for that specific course.
    
    The JSON Format object must have the following structure:
    [
      {
        uniName: University of Johannesburg,
        courseName: Bachelor of Science in Computer Science,
        courseDuration: 3 years,
        courseDescription: Course description example,
        admissionRequirements: Admission example
      },
      {
        uniName: University of Pretoria,
        courseName: Bachelor of Science in Computer Science,
        courseDuration: 3 years,
        courseDescription: Course description example,
        admissionRequirements: Admission example
      }
    ]    
    `;

   //asking the AI to complete the prompt you've provided with additional text
   const completion = await openai.createCompletion({
     model: "text-davinci-003",
     prompt,
     temperature: 0.6,
     max_tokens: 1000,
   });

     // Extract the course recommendations text from the API response
     const courseRecommendations = completion.data.choices[0].text;

     // Parse the course recommendations text into structured course objects
     const courses = parseCourseRecommendations(courseRecommendations);
 
     const extractedCourses = [];

     for (const course of courses) {
      // If 'course.uniName' is falsy, assign an empty string to 'uniName'
      const uniName = course.uniName || "";
      // If 'course.courseName' is falsy, assign an empty string to 'courseName'
      const courseName = course.courseName || "";

      const courseDescription = course.courseDescription || "";

      const courseDuration = course.courseDuration || "";

      const admissionRequirements = course.admissionRequirements || "";
  
      

      // Create an object containing extracted course information and push it to 'extractedCourses' array
      extractedCourses.push({
        uniName,
        courseName,
        courseDuration,
        courseDescription,
        admissionRequirements, 
      });
    }
     // Send the extracted course recommendations as a JSON response
    res.status(200).json(extractedCourses);

    console.log(extractedCourses);

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




