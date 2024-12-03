const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  coursePrice: {
    type: Number,
    required: true
  },
  creditCardNumber: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
