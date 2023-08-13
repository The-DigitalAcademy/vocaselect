// Server-side code to handle the API request
const express = require('express');
const router = express.Router();
const { OpenAIApi } = require('openai');
const configuration = require('../../config/openaiConfig');
const openai = new OpenAIApi(configuration);

router.post('/getUniversities', async (req, res) => {
  try {
    const { selectedCourseName } = req.body;

    // Construct a prompt using the selected course name
    const prompt = `Please recommend universities offering ${selectedCourseName} in South Africa.`;

    // Make a request to the OpenAI API
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      temperature: 0.6,
      max_tokens: 1000,
    });

    // Extract and parse the recommendations as you did before
    const courseRecommendations = completion.data.choices[0].text;
    const universities = parseCourseRecommendations(courseRecommendations);

    res.status(200).json(universities);
  } catch (err) {
    console.error('Error occurred:', err);
    res.status(500).json({ error: 'An error occurred while generating recommendations.' });
  }
});

// Add this router to your main Express app
app.use('/api', router);

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