const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/user');
require('./services/passport');

const keys = require('./config/keys');
const billingRoutes = require('./routes/billingRoutes');
const authRoutes = require('./routes/authRoutes');
//const appRoutes = require('./routes/index');
const PORT = process.env.PORT || 5000;

const app = express();

//middleware to parse incoming request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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
app.use('/api/stripe',billingRoutes);
//app.use('/',appRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    
    const path = require('path');

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}


app.listen(PORT,()=>{
    console.log("Server started on "+PORT);
});