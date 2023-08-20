const db = require("../models");
const Timeline = db.Timeline;

const getTimelines = async (req, res) => {
  try {
    const timelineData = await Timeline.findAll();
    console.log(timelineData)
    res.json(timelineData);
  } catch (error) {
    console.error('Error getting timeline data:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTimelines,
};