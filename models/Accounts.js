const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  name: { type: String, required: true },
  balance: { type: Number, required: true },
  withdraw: Number,
  deposit: Number,
  lastTrans: Number,
});

module.exports = mongoose.model('Accounts', AccountSchema);
