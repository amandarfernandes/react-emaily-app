
const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('User');


passport.serializeUser((user,done)=>{
    return done(null, user.id);
});

passport.deserializeUser(async (id, done)=>{
    try {
        let user  = await User.findById(id);
        return done(null,user);
    } catch(err) {
        console.log(error);
    }
});

passport.use(
    new GoogleStrategy({
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        proxy: true
        }, 
    async function (accessToken, refreshToken, profile, done) {
        try {
            const user = await User.findOne({ googleId: profile.id });
            if (!user) {
                let addedUser = await User.create(new User({googleId:profile.id}));
                return done(null, addedUser);
            }
            return done(null, user);
        } catch (error) {
            console.log(error);
        }
    })
);