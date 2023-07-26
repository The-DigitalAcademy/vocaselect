const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'VocaSelect',
      version: '1.0.0',
      description: 'Explore your passion, Discover your career',
    },
  },
  apis: ['BACKEND/server.js'], // Path to the API entry point file(s)
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
