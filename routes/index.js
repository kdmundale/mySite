const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Request for home recieved');
  res.render('pages/index');
});

router.get('/projects', (req, res) => {
  console.log('Request for projects page recieved');
  res.render('pages/projects');
});

router.get('/photography', (req, res) => {
  console.log('Request for photography page recieved');
  res.render('pages/photography');
});

module.exports = router
