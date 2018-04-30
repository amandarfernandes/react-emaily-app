const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/user');
require('./services/passport');

const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const appRoutes = require('./routes/index');
const PORT = process.env.PORT || 5000;

const app = express();

//wrap middlewares before sending to route handlers
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys:[keys.COOKIE_KEY]
}));
app.use(passport.initialize());
app.use(passport.session());

//mongoose setup
mongoose.set("debug",true);
mongoose.Promise=Promise;
mongoose.connect(keys.MONGO_URI, {keepAlive:true});

app.use('/auth',authRoutes);
//app.use('/',appRoutes);

app.listen(PORT,()=>{
    console.log("Server started on "+PORT);
});