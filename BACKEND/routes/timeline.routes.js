// timeline.routes.js

const express = require('express');
const timelineController = require('../controllers/timeline.controller');

const router = express.Router();

router.get('/', timelineController.getTimelines);

module.exports = router;