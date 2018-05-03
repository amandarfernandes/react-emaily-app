const mongoose = require('mongoose');
const keys = require('../config/keys');
mongoose.set("debug",true);
mongoose.Promise=Promise;
mongoose.connect(keys.mongoURI, {keepAlive:true});

module.exports.User = require('./user');