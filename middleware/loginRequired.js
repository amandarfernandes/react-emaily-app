module.exports = (req,res,next) => {
    return req.user ? next(): next({status: 401, error:'You must be signed in'})
};