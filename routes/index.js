const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Request for home recieved');
  res.render('pages/index');
});

router.get('/projects', (req, res, next) => {
  console.log('Request for projects page recieved');
  res.render('pages/projects');
});

router.get('/photography', (req, res, next) => {
  console.log('Request for photography page recieved');
  res.render('pages/photography');
});

router.get('/work_history', (req, res, next) => {
  console.log('Request for work_history page recieved');
  res.render('pages/work_history');
});

module.exports = router
