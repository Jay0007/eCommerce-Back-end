const express = require('express')
const router = express.Router()
const Announcement = require('../models/announcement')
const verify = require('../models/verifyToken')

// announcements routes
router.get('/postman-announcements', (req, res) => {
  const announcements = Announcement.find()
    .sort({ createdAt: -1 })
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err)
    })
  })

  router.post('/announcements/add', (req, res) => {
    const announcement = new Announcement(req.body)
    announcement
      .save()
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        console.log(err)
      })
  })

  // router.get('/announcements/:id', (req, res) => {
//   const id = req.params.id
//   Announcement.findById(id)
//     .then(result => {
//       res.send(result)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })

// router.get('/announcements/all', (req, res) => {
//   Announcement.find()
//     .then(result => {
//       res.send(result)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })

// router.get('/announcements/delete/:id', (req, res) => {
//   Announcement.findOneAndRemove({ _id: req.params.id })
//     .then(result => {
//       res.redirect('/announcements')
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })

module.exports = router
