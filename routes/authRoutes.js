const express = require('express'),
    router = express.Router(),
    passport = require('passport');

router.get('/google', 
    passport.authenticate('google',{
        scope:['profile','email']
    })
);

router.get('/google/callback', 
    passport.authenticate('google'),(req,res)=>{
        res.redirect('/surveys')
    }
);

router.get('/current_user',(req,res,next)=>{
    res.send(req.user);
});

router.get('/logout',(req,res,next)=>{
    req.logout();
    res.redirect("/");
});

module.exports = router;
