const express = require('express');
const router = express.Router();
const path = require('path');

//linking index page to route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

//linking stats page to route
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, './../public/stats.html'));
});

//linking excercise page to route
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, './../public/exercise.html'));
});

module.exports = router;