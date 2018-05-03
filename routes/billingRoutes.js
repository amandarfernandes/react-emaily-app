const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const stripe = require('stripe')(keys.STRIP_SECRET_KEY);
const loginRequired = require('../middleware/loginRequired');

const createCharge = async (req,res,next)=>{
    try {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            source: req.body.id,
            description: "Charge for 5 credits"
        });
        req.user.credits +=5;
        const user = await req.user.save();
        res.send(user);
    } catch (err) {
        console.log(err);
    }
}

router.post('/', loginRequired, createCharge);
module.exports = router;