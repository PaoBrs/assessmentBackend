const mongoose = require('mongoose');

const FavListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  items: [{
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',

    },
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('FavList', FavListSchema);
