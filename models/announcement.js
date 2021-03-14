const mongoose = require('mongoose')
const schema = mongoose.Schema

const announcementSchema = new schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    note:{
      type: String
    }
  },
  { timestamps: true }
)

const Announcement = mongoose.model('announcement', announcementSchema)

module.exports = Announcement
