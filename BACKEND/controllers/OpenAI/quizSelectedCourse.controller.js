const { OpenAIApi } = require("openai");
const configuration = require("../../config/openaiConfig");
const openai = new OpenAIApi(configuration);

// const axios = require('axios');

exports.career_Choice_Selected_Course = async (req, res) => {
  try {
    
    //uses the body-parser middleware - destructuring assigment
    // Extract the user's chosen career choice from the request body
    const { career} = req.body;

     // Check if the careerChoice is provided
     if (!careerChoice || careerChoice.trim() === "") {
      return res.status(400).json({ error: "Please provide a valid career choice." });
    }

    //AI prompt 
    const prompt = `Please recommend a maximum of six courses (only one course per university) and provide a short description explained in simple terms like to a 5-year-old for the career ${career} in South Africa. Only provide undergraduate qualifications/courses. Include a faculty prospectus and admission criteria (explained in simple terms like to a 5-year-old) for that specific course. Format the response in a stringified JSON representation.

    Explain the course description and admission requirements in layman's terms for high school minors of age 15 years to understand.
    
    The JSON Format object must have the following structure:
    [
      {
        uniName: University of Johannesburg,
        courseName: Bachelor of Science in Computer Science,
        courseDescription: Course description example,
        admissionRequirements: Admission example
      },
      {
        uniName: University of Pretoria,
        courseName: Bachelor of Science in Information Systems,
        courseDescription: Course description example,
        admissionRequirements: Admission example
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

      const admissionRequirements = course.admissionRequirements || "";
  
      const courseDescription = course.courseDescription || "";

      // Create an object containing extracted course information and push it to 'extractedCourses' array
      extractedCourses.push({
        uniName,
        courseName,
        admissionRequirements,
        courseDescription,
      });
    }
     // Send the extracted course recommendations as a JSON response
    res.status(200).json(extractedCourses);

    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: "An error occurred while generating recommendations." });
  }
};

//@GET - METHOD
exports.Get_career_Choice_Selected_Course = async (req, res) => {
  try {
    
    //uses the body-parser middleware - destructuring assigment
    // Extract the user's chosen course from the request body
    const {  career } = req.query;

     // Check if the careerChoice is provided
    //  if (!course || course.trim() === "") {
    //   return res.status(400).json({ error: "Please provide a valid career choice." });
    // }

    //AI prompt 
    const prompt = `Please provide all the universities in South Africa that are offering this course ${career}.

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

// New endpoint for displaying course details
// exports.displayCourseDetails = async (req, res) => {
//   try {
//     const { extractedCourses } = req.body;
//     const { selectedCourseName } = req.params;

//     if (!selectedCourseName || selectedCourseName.trim() === "") {
//       return res.status(400).json({ error: "Please provide a valid course name." });
//     }

//     const selectedCourse = extractedCourses.find(course => course.courseName === selectedCourseName);

//     if (!selectedCourse) {
//       return res.status(404).json({ error: "Course not found." });
//     }

//     res.status(200).json(selectedCourse);

//   } catch (err) {
//     console.error("Error occurred:", err);
//     res.status(500).json({ error: "An error occurred while fetching course details." });
//   }
// };



