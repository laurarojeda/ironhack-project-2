const express = require('express');
const Course = require('../models/course.js');
const User = require('../models/user.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  Course.find({})
    .sort({ name: 1 })
    .populate('students')
    .then((coursesArray) => {
      res.render('courses/list', { coursesArray, header: 'Courses' });
    })
    .catch((error) => {
      next(error);
    });
});

// FIND COURSES
router.post('/search', (req, res, next) => {
  const searchInput = req.body.query;
  Course.find({
    $text: {
      $search: searchInput,
      $caseSensitive: false,
      $diacriticSensitive: false,
    },
  }).sort({ name: 1 })
    .then((result) => {
      res.render('courses/search', { result });
    })
    .catch((error) => {
      next(error);
    });
});

// COURSE DETAIL
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Course.findById(id).populate('reviews.author')
    .then((course) => {
      res.render('courses/detail', course)
    })
    .catch((error) => {
      next(error);
    });
});

// ADD A COURSE
router.post('/:id/add', (req, res, next) => { //eslint-disable-line
  const courseId = req.params.id;
  const userID = req.session.currentUser._id; //eslint-disable-line
  const message = { messages: req.flash('info') }; //eslint-disable-line

  if (userID) {
    User.findById(userID)
      .then((user) => {
        user.stats.push({ courses: courseId, checked: false });
        user.save()
          .then(() => {
            // req.flash('info', 'Add course successfully');
            res.status(200).json({ courseId });
          })
          .catch((error) => {
            next(error);
          });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });

    Course.findByIdAndUpdate(courseId, { $push: { students: userID } }, { new: true })
      .exec((result) => {
        res.status(200).json(result);
      });
  }
});

router.post('/:id/review', (req, res, next) => {
  const courseId = req.params.id;
  const userId = req.session.currentUser._id;
  const { userComment } = req.body;
  // Course.findByIdAndUpdate(courseId, { $push: { reviews: { comment: comment } } }, { new: true })
  Course.findById(courseId)
    .then((course) => {
      course.reviews.push({ comment: userComment, author: userId });
      course.save()
        .then(() => {
          res.redirect(`/courses/${courseId}`);
        })
        .catch((error) => {
          next(error);
        });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
