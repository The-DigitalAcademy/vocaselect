const { OpenAIApi } = require("openai");
const configuration = require("../config/openaiConfig");
const openai = new OpenAIApi(configuration);

exports.generateCareer = async (req, res) => {
  try {
    const { careerChoice } = req.body;

    const prompt = `Recommended universities, maximum of six courses (only one course per university) and short description of course from the university prospectus for a ${careerChoice} in South Africa: Your response should be in JSON, career choice should be the outer array and within it uniName object, courseName object and courseDescription object as one json object for that course`;

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 500,
    });

    const recommendations = completion.data.choices[0].text;
    const jsonResult = { recommendations: recommendations.split('\n') };
    res.status(200).json(jsonResult);

  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).json({ error: "An error occurred while generating recommendations." });
  }
};
