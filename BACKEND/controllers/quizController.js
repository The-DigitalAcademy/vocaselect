const { OpenAIApi } = require("openai");
const configuration = require("../config/openaiConfig");
const openai = new OpenAIApi(configuration);

const quizQs = [
  {
    question: "1. What are your favorite subjects or topics to learn about?",
    answers: [
      "a) Science and Technology",
      "b) History and Politics",
      "c) Arts and Literature",
      "d) Others (please specify): _______"
    ]
  },
  {
    question: "2. What do you enjoy doing in your free time?",
    answers: [
      "a) Reading books",
      "b) Playing sports",
      "c) Watching movies or TV shows",
      "d) Others (please specify): _______"
    ]
  },
  {
    question: "3. How would you describe your personality?",
    answers: [
      "a) Outgoing",
      "b) Analytical",
      "c) Creative",
      "d) Others (please specify): _______"
    ]
  },
  {
    question: "4. What are your long-term career goals?",
    answers: [
      "a) Climbing the corporate ladder",
      "b) Starting my own business",
      "c) Making a positive impact in my community",
      "d) Others (please specify): _______"
    ]
  },
  {
    question: "5. Are you interested in remote work or prefer on-site positions?",
    answers: [
      "a) Prefer remote work",
      "b) Prefer on-site positions",
      "c) Open to both options",
      "d) No preference"
    ]
  },
  {
    question: "6. Are you willing to undergo additional training or education to pursue a dream job?",
    answers: [
      "a) Yes, willing to invest in education",
      "b) No, prefer to stick to current skills"
    ]
  },
  {
    question: "7. Have you ever volunteered or had a previous job?",
    answers: [
      "a) Volunteered before",
      "b) Had a previous job",
      "c) Haven't done either",
      "d) Prefer not to answer"
    ]
  },
  {
    question: "8. What job roles or positions have you always been curious about?",
    answers: [
      "a) Software Developer",
      "b) Marketing Manager",
      "c) Graphic Designer",
      "d) Others (please specify): _______"
    ]
  },
  {
    question: "9. Are you willing to invest extra hours for a job you're passionate about?",
    answers: [
      "a) Yes, willing to go the extra mile",
      "b) Prefer a strict work-life balance",
      "c) It depends on the situation",
      "d) Unsure"
    ]
  }
]

exports.generateQuizRecommendations = async (req, res) => {
  try {
    const { answers } = req.body;
    const prompt = `Please Generate five career options for someone who responded this way to a quiz in south africa:\n` +
      questions.map((question, index) => `${index + 1}. ${question} ${answers[index]}`).join(",\n");
    
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 500,
    });
    const recommendations = completion.data.choices[0].text;
    const jsonResult = {
      questions: questions,
      answers: answers,
      recommendations: recommendations.split('\n')
    };
    res.status(200).json(jsonResult);
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: "An error occurred while generating recommendations." });
  }
};





