const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  author: String,
  place: String,
  description: String,
  hashtags: String,
  image: String,
  likes: {
    type: Number,
    default: 0,

  }
},{
  //cria um dado de data e hora em cada campo
  timestamps: true,
})

module.exports = mongoose.model('Post', PostSchema);