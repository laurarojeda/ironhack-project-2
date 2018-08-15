const express = require('express');
const Course = require('../models/course.js');
const User = require('../models/user.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  Course.find({})
    .then((coursesArray) => {
      res.render('courses/list', { coursesArray, header: 'Courses' });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Course.findById(id)
    .then((course) => {
      res.render('courses/detail', course);
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/add', (req, res, next) => {
  const { id } = req.params;
  const user = req.session.currentUser;
  const message = { messages: req.flash('info') };
  if (user) {
    User.findById(id)
      .populate('Course')
      .then(() => {
        req.flash('info', 'Add course successfully');
        res.redirect('/:id', message);
      })
      .catch((error) => {
        next(error);
      });
  }
});

module.exports = router;
