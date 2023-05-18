const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

/* GET message form */
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'New Message'});
});

router.post('/new', function(req, res, next) {
  messages.unshift({
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  });
  res.redirect('/');
})

module.exports = router;
