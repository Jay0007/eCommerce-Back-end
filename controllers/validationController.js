const validation = require('../models/validation')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

const maxAge = 60 * 60
const createToken = id => {
  return jwt.sign({ id }, process.env.tokenKey)
}

module.exports.registration_user = async function(req, res) {
  const { error } = await validation.registrationSchema(req.body)
  if (error) {
    res.send(error.details[0].message)
  }
  //checking for emails in database if it already exist
  const emailExist = await validation.valSchema.findOne({
    email: req.body.email
  })
  if (emailExist) {
    res.status(400).send('email already exist')
  } else {
    const Validation = new validation.valSchema(req.body)
    Validation.save()
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
module.exports.login_user = async (req, res) => {
  const { error } = validation.loginSchema(req.body)
  if (error) {
    res.status(400).send(error.details[0].message)
  }
  //checking for emails in database if it exist
  const user = await validation.valSchema.findOne({ email: req.body.email })
  if (user) {
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (validPassword) {
      //Creating and assigning a token
      //token goes in a cookie
      var token = createToken(user._id)
      res
        .status(200)
        .cookie('auth-token', token, { httpOnly: true, maxAge: maxAge * 1000 })
        .send(token)
    }
    res.status(400).send('Password is wrong...')
  }
  res.status(400).send('email does not exist...')
}
// module.exports.login_user = async (req, res) => {
//   const { error } = validation.loginSchema(req.body)
//   if (error) {
//     res.status(400).send(error.details[0].message)
//   }
//   //checking for emails in database if it exist
//   const user = await validation.valSchema.findOne({ email: req.body.email })
//   if (!user) {
//     res.status(400).send('email does not exist...')
//   }
//   const validPassword = await bcrypt.compare(req.body.password, user.password)
//   if (!validPassword) {
//     res.status(400).send('Password is wrong...')
//   }

//   //Creating and assigning a token
//   //token goes in a cookie
//   console.log(process.env.tokenKey)
//   var token = jwt.sign({ _id: user._id }, process.env.tokenKey)
//   res
//     .status(200)
//     .header('auth-token', token)
//     .send(user)
// }

module.exports.logout_user = async (req, res) => {
  // res.cookie('auth-token', '', {maxAge:1})
  res.cookie('auth-token', '').send('Logged out...')
}