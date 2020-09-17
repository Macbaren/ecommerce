const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1/users'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const userSchema = new mongoose.Schema({
  first_name: String,
  email: String,
  gender: String,
  ip_address: String,
  company: String,
  id: Number,
  roles: {
    type: [String],
    default: ['user']
  }
})



const User = mongoose.model('users', userSchema)

// const userObj = new User({
//   first_name: 'bbbbbbb',
//   last_name: 'Mvvvvvvvv',
// })

// userObj.email = 'lsdkfjsldf'
// userObj.ip_address = '393.9393.9393'
// userObj.id = 1009
// userObj.save()

const users = User.find({}).exec().then(data => console.log('DATA', data))

console.log('USERS', users)
