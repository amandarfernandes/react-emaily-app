const express = require('express'),
    router = express.Router(),
    passport = require('passport');

router.get('/google', 
    passport.authenticate('google',{
        scope:['profile','email']
    })
);

router.get('/google/callback', 
    passport.authenticate('google')
);

router.get('/user/current_user',(req,res,next)=>{
    res.send(req.user);
});

router.get('/user/logout',(req,res,next)=>{
    req.logout();
    res.send(req.user);
});



module.exports = router;
