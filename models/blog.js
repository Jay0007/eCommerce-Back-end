const mongoose = require('mongoose')
const schema = mongoose.Schema

const blogSchema = new schema({
  title: {
    type : String,
    required : true
  },
  snippet: {
    type : String,
    required: true
  },
  body: {
    type : String,
    required: true
  }
}, {timestamps: true})

const Blog = mongoose.model('blog', blogSchema)
// const deleteUser = mongoose.model('blog', (req, res) => {
//   users.findOneAndRemove(
//     {
//       userId: req.params.id
//     },
//     function(err, user) {
//       if (err) throw err

//       console.log('Success')
//     }
//   )
//   res.redirect('/blogs')
// })

module.exports = Blog

