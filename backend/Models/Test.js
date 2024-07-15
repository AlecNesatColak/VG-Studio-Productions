const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const testSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 12,
  },
  role: {
    type: String,
    enum: ['admin'],
    default: 'admin',
  },
})

module.exports = mongoose.model('Test', testSchema)