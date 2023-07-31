//Packages
const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const userRoutes = require ('./routes/user.routes')
const subjectRoutes = require('./routes/subjects.routes')
const quizRoutes = require('./routes/quiz.routes')
const getAllQuiz = require('./routes/quiz.routes')
const surveyRoutes = require('./routes/survey.routes')

const { specs, swaggerUi } = require('./swagger');

//Environment file
require('dotenv').config();

//assigning the variable app to express
const app = express();


//all domains are allowed (* is a wildcard)
var corsOptions = {
  origin: "*"
};

const db = require("./models");


app.use(cors(corsOptions));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Add the Swagger UI middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

db.sequelize.sync()
  .then(() => {
    console.log("Connected to the Vocaselect database!");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  })

// parse requests of content-type - application/json
// app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
  res.json({ message: "Vocaselect" });
});

//routes for the user API
app.use('/api/users', userRoutes)
// app.use('/api/allSubjects', subjectRoutes)

app.use('/api/subjects', subjectRoutes)

// routes for getting all subjets

// app.use('/app/getting')

 app.use('/api/SubjectsAndMarks', subjectRoutes)


 // route for quiz API
 app.use('/api/quiz', quizRoutes)

  // route for getting all quiz API
  app.use('/api/getAllQuiz', getAllQuiz)

 // route for survey API
 app.use('/api/survey', surveyRoutes)


// Import the deleteUserById method (replace this with the actual path to your method file)
const { deleteUserById } = require('./controllers/user.controllers');

// Create the route for deleting a user
app.delete('/:id', deleteUserById);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}.`);
});


