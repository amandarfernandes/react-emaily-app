
const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('User');


passport.serializeUser((user,done)=>{
    done(null, user.id);
});

passport.deserializeUser(async (id, done)=>{
    try {
        let user  = await User.findById(id);
        done(null,user)
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
        //console.log('access token',accessToken);
        //console.log('refresh token',refreshToken);
        //console.log('profile',profile);
        try {
            const user = await User.findOne({ googleId: profile.id });
            if (!user) {
                let addedUser = await User.create(new User({googleId:profile.id}));
                done(null, addedUser)
            } else {
                done(null, user);
            }
        } catch (error) {
            console.log(error);
        }
    })
);