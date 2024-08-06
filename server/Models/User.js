const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const modelAppmodel = mongoose.model('models', modelSchema);
module.exports = modelAppmodel;
