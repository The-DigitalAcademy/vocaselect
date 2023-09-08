const { OpenAIApi } = require("openai");
const configuration = require("../../config/openaiConfig");
const openai = new OpenAIApi(configuration);


// This function is for generating 6 courses which relates to the entered career choice. 
exports.generateCourses = async (req, res) => {
  try {
    // Extract the user's chosen career choice from the request body
    const { careerChoice} = req.body;

     // Check if the careerChoice is provided - validation
     if (!careerChoice || careerChoice.trim() === "") {
      return res.status(400).json({ error: "Please provide a valid career choice." });
    }

    //AI prompt 
    const prompt = `Please recommend a maximum of six courses (only one course per university) and provide a short description explained in simple terms, like to a 5-year-old, for the career ${careerChoice} in South Africa. Only provide undergraduate qualifications/courses. Include a faculty prospectus and admission criteria, explained in simple terms like to a 5-year-old, for that specific course. Admission Criteria must be explained in maximum of 200 words, explain this in such a way that learners will understand.

    For each university, please provide the course name, course description, admission requirements, and the university's official URL.
    
    Format the response in a JSON representation.
    
    Explain the course description and admission requirements in a way that high school students aged 15 years can easily understand.
    
    Here's an example of how the JSON object should look:

    [
      {
        uniName: University of Johannesburg,
        courseName: Bachelor of Science in Computer Science,
        courseDescription: The purpose of the BSc Information Technology programme is to develop qualified scientists who can identify, evaluate and solve problems associated with information technology and be able to assume and demonstrate initiative and responsibility in related academic and professional contexts in South Africa as well as in the international world.,
        admissionRequirements: Applicants must have a National Senior Certificate (NSC) with a minimum of 60% in Mathematics and Physical Science.
        universityURL: https://www.uj.ac.za/
      },
      {
        uniName: University of Pretoria,
        courseName: Bachelor of Science in Information Systems,
        courseDescription: In this course, you'll learn how computers help businesses. It's like teaching computers to be smart helpers!,
        admissionRequirements: A minimum score of 50% in Mathematics and a pass in English are mandatory.,
        universityURL: https://www.up.ac.za/
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

      const uniName = course.uniName;

      const courseName = course.courseName;

      const admissionRequirements = course.admissionRequirements;
  
      const courseDescription = course.courseDescription;

      const universityURL = course.universityURL;


      // Create an object containing extracted course information and push it to 'extractedCourses' array
      extractedCourses.push({
        uniName,
        courseName,
        admissionRequirements,
        courseDescription,
        universityURL
      });
    }
     // Send the extracted course recommendations as a JSON response
    res.status(200).json(extractedCourses);

    
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: "An error occurred while generating courses." });
  }
};

// Function to parse course recommendations text into structured course objects
function parseCourseRecommendations(text) {
  const courses = [];

  // Split the input text into an array of lines using newline characters as separators
  const lines = text.split('\n');

  let currentCourse = {};
  for (const line of lines) {
    // Split the line into key and value parts using ':' as a separator, and trim any whitespace
    const [key, value] = line.split(':').map(part => part.trim());

    // If both 'key' and 'value' are truthy (not empty), store them in 'currentCourse'
    if (key && value) {
      currentCourse[key] = value;
    // If 'key' or 'value' is empty and there are existing properties in 'currentCourse',
      // push 'currentCourse' to the 'courses' array, and reset 'currentCourse' to an empty object
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


//@GET - METHOD
// exports.career_Choice_Selected_Course = async (req, res) => {
//   try {
    
//     //uses the body-parser middleware - destructuring assigment
//     // Extract the user's chosen course from the request body
//     const {  careerChoice } = req.query;

//      // Check if the careerChoice is provided
//     //  if (!course || course.trim() === "") {
//     //   return res.status(400).json({ error: "Please provide a valid career choice." });
//     // }

//     //AI prompt 
//     const prompt = `Please provide all the universities in South Africa that are offering this course ${careerChoice}.

//     Provide all the list of top 5 universities, course duration, admission requirements, and career opportunities for that specific course.
    
//     The JSON Format object must have the following structure:
//     [
//       {
//         uniName: University of Johannesburg,
//         courseName: Bachelor of Science in Computer Science,
//         courseDuration: 3 years,
//         courseDescription: Course description example,
//         admissionRequirements: Admission example,
//         universityURL: uniUrl
//       },
//       {
//         uniName: University of Pretoria,
//         courseName: Bachelor of Science in Computer Science,
//         courseDuration: 3 years,
//         courseDescription: Course description example,
//         admissionRequirements: Admission example,
//         universityURL: uniUrl
//       }
//     ]    
//     `;

//    //asking the AI to complete the prompt you've provided with additional text
//    const completion = await openai.createCompletion({
//      model: "text-davinci-003",
//      prompt,
//      temperature: 0.6,
//      max_tokens: 1000,
//    });

//      // Extract the course recommendations text from the API response
//      const courseRecommendations = completion.data.choices[0].text;

//      // Parse the course recommendations text into structured course objects
//      const courses = parseCourseRecommendations(courseRecommendations);
 
//      const extractedCourses = [];

//      for (const course of courses) {
//       const uniName = course.uniName;
//       const courseName = course.courseName;

//       const courseDescription = course.courseDescription;

//       const courseDuration = course.courseDuration; 
//       const admissionRequirements = course.admissionRequirements; 
//       const universityURL = course.universityURL;         
  
      

//       // Create an object containing extracted course information and push it to 'extractedCourses' array
//       extractedCourses.push({
//         uniName,
//         courseName,
//         courseDuration,
//         courseDescription,
//         admissionRequirements, 
//         universityURL
//       });
//     }
//      // Send the extracted course recommendations as a JSON response
//     res.status(200).json(extractedCourses);

//     console.log(extractedCourses);

//   } catch (err) {
//     console.error("Error occurred:", err);
//     res.status(500).json({ error: "An error occurred while generating recommendations." });
//   }
// };



