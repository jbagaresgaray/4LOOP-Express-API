'use strict';

exports.validateUser = function(req, res, next) {
    req.checkBody('lastname', 'Please provide your lastname').notEmpty();
    req.checkBody('firstname', 'Please provide your firstname').notEmpty();
    req.checkBody('username', 'Please provide your username').notEmpty();
    req.checkBody('password', 'Please provide your password').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        res.status(400).send({
            response: {
                result: errors,
                msg: '',
                success: false
            },
            statusCode: 400
        });
    } else {
        next();
    }
};