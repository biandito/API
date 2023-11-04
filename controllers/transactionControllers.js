const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  comprador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  vendedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
  },
  dataTransacao: {
    type: Date,
    default: Date.now,
  },
  valorTransacao: Number,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
