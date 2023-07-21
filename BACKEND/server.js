//Packages
const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const userRoutes = require ('./routes/user.routes')


//Environment file
// require('dotenv').config();

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

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

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


// Import the deleteUserById method (replace this with the actual path to your method file)
const { deleteUserById } = require('./controllers/user.controllers');

// Create the route for deleting a user
app.delete('/:id', deleteUserById);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}.`);
});