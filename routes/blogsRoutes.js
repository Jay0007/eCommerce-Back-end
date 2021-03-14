const express = require('express'),
      router = express.Router(),
      Blog = require('../models/blog'),
      verify = require('../models/verifyToken')



// blogs routes
router.get('/postman-blogs', verify, (req, res) => {
  const blogs = Blog.find()
    .sort({ createdAt: -1 })
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/blogs', (req, res) => {
  const blogs = Blog.find()
    .sort({ createdAt: -1 })
    .then(result => {
      res.render('page1', { title: 'Hello', blogs: result })
    })
    .catch(err => {
      console.log(err)
    })
})
router.get('/blogs/:id', (req, res) => {
  const id = req.params.id
  Blog.findById(id)
    .then(result => {
      res.render('page4', { title: 'Hello', blog: result })
    })
    .catch(err => {
      console.log(err)
    })
})
router.post('/blogs/add', (req, res) => {
  const blog = new Blog(req.body)
  blog
    .save()
    .then(result => {
      res.redirect('/')
    })
    .catch(err => {
      console.log(err)
    })
})
router.get('/blogs/all', (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err)
    })
})
router.get('/blogs/delete/:id', (req, res) => {
  Blog.findOneAndRemove({ _id: req.params.id })
    .then(result => {
      res.redirect('/blogs')
    })
    .catch(err => {
      console.log(err)
    })
})


module.exports = router