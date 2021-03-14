const mongoose = require("mongoose");
const schema = mongoose.Schema;

const courseSchema = new schema(
  {
    title: {
      type: String,
      required: true
    },
    snippet: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Course = mongoose.model("course", courseSchema);
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

module.exports = Course
