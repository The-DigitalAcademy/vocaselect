//Packages
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const userRoutes = require ('./routes/user.routes')
const timelineRoutes = require('./routes/timeline.routes');
const subjectRoutes = require('./routes/subjects.routes')
const selectedSubjectRoutes = require('./routes/selectedSubject.routes')
const { sendResetOTP, resetPassword } = require('./controllers/user.controllers')
// const nodemailer = require('nodemailer');

//ChatGPT Routes
const careerRoutes = require("./routes/careerRoutes");
const quizRoutes = require("./routes/quizRoutes");
const selectedCourseController = require("./routes/selectedCourse");


const quizAnswers = require('./routes/quizAnswers.routes')

//SWAGGER 
// const quizAnswers = require('./routes/quizAnswers.routes')
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Environment file
require('dotenv').config();

//assigning the variable app to express
const app = express();


//all domains are allowed (* is a wildcard)
var corsOptions = {
  origin: "*"
};

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Connected to the Vocaselect database!");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  })

app.use(cors(corsOptions));

//Middlewares
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//routes for the user API
app.use('/api/users', userRoutes)

// routes for getting all subjets
app.use('/api/subjects', subjectRoutes)

// app.use('/app/getting')

app.use('/api/user_selected_subjects', selectedSubjectRoutes);

// Use the timeline route
app.use('/api/timeline', timelineRoutes);

// Import the deleteUserById method (replace this with the actual path to your method file)
const { deleteUserById } = require('./controllers/user.controllers');

// Create the route for deleting a user
app.delete('/:id', deleteUserById);

//API for answers

app.use('/api/Answers', quizAnswers)

// Endpoint to send OTP
// app.post('/', sendResetOTP);

//  Endpoint to reset password
// app.post('/', resetPassword);

// Initialize swagger-jsdoc
// const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Swagger configuration options
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "VocaSelect API",
      version: "1.0.0",
      description: "API to get recommendations for a preferred career choice in South Africa",
    },
  },
  apis: ['./routes/*.js'], // Point to the route files containing Swagger comments
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);


// Serve Swagger API documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//User AUTH routes for the user API
app.use('/api/users', userRoutes)

// app.use('/api/allSubjects', subjectRoutes)
app.use('/api/subjects', subjectRoutes)

// OpenAI API Routes
app.use("/enterCareer", careerRoutes);
app.use("/quiz", quizRoutes);
app.use("/courseInfo", selectedCourseController );



// Endpoint to send OTP
app.post('/', sendResetOTP);

// Endpoint to reset password
app.post('/', resetPassword);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}.`);
});

//simple route
app.get("/", (req, res) => {
  res.json({ message: "Vocaselect" });
});