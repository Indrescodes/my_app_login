const mongoose = require('mongoose');

const clientInfoSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: String,
    email: String,
  });

const ClientInfo = mongoose.model('ClientInfo', clientInfoSchema);
module.exports = ClientInfo;
