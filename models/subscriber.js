const mongoose = require('mongoose');
const subscriberSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  subscriberToChannel:{
    type: String,
    required: true

  },
  subscribedDate:{
    type: Date,
    required: true,
    default: Date.now()
  }

})


module.exports = mongoose.model('Subscriber',subscriberSchema)