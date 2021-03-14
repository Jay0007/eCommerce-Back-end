const express = require('express') //expresss app
const morgan = require('morgan') //Premade middleware -> Logs all the requests to the console
const mongoose = require('mongoose') //Mongoose provides a straight-forward, schema-based solution to model your application data
const bodyParser = require('body-parser') //to make the requests readable by node
const cors = require('cors') // To let other ports use the requests
const cookieParser = require("cookie-parser") // Using cookie parser

const app = express()
app.set('view engine', 'ejs')
const dbURL = "mongodb+srv://Ninja007:Ninja007@cluster0.ac1hu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result)=> app.listen(3000)) //listening to requests only after the database connection is complete
  .catch((err) => console.log(err))

app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//Routes files imported
// app.use(require('./routes/blogsRoutes'))
app.use(require('./routes/announcementRoutes'))
app.use(require('./routes/validationRoutes'))


// const Blog = require('./models/blog')
// // navbar routes
// app.get('/', (req, res) => {
//   res.redirect('/blogs')
// })
// app.get('/about', (req, res) => {
//   res.render('page2')
// })
// app.get('/create', (req, res) => {
//   res.render('page3')
// })


// The 404 - error Page -> This is a middleware
// app.use((req, res) => {
//   res.status(404).render('404page')
// })


// Extra pages
/*app.get('/search-blog', (req, res) => {
  Blog.findOne({title: 'Blog 2'})
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err)
    })
}) */

/*app.get('/blogs/add', (req, res) => {
  const blog = new Blog({
    title: 'Blog 2',
    snippet: 'Something about Blog 2.',
    body: 'Something more about Blog 2.'
  })
  blog
    .save()
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err)
    })
}) */

