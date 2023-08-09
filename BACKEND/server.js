//Packages
const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const userRoutes = require ('./routes/user.routes')

const careerRoutes = require("./routes/OpenAI/careerRoutes");
const quizRoutes = require("./routes/OpenAI/quizRoutes");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//SWAGGER 
// const { specs, swaggerUi } = require('./swagger');

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



// Import the deleteUserById method (replace this with the actual path to your method file)
const { deleteUserById } = require('./controllers/user.controllers');

// Create the route for deleting a user
app.delete('/:id', deleteUserById);


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

//routes for the user API
app.use('/api/users', userRoutes)

// AI Routes
app.use("/enterCareer", careerRoutes);
app.use("/quiz", quizRoutes);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}.`);
});

//simple route
app.get("/", (req, res) => {
  res.json({ message: "Vocaselect" });
});