'use strict';

var usersDao = require('../daos/users');

var async = require('async');

function Users() {
    this.usersDao = usersDao;
}


Users.prototype.createUser = (data, next) => {
    async.waterfall([
        (callback) => {
            usersDao.checkUserUsername(data, (err, response) => {
                if (err) {
                    next({
                        msg: err.msg,
                        result: err,
                        success: false
                    }, null)
                }

                if (response && response.length > 0) {
                    next(null, {
                        msg: 'Username already existed',
                        result: null,
                        success: false
                    });
                }
                callback();
            });
        },
        (callback) => {
            usersDao.createUser(data, (err, response) => {
                if (err) {
                    next({
                        msg: err.msg,
                        result: err,
                        success: false
                    }, null)
                }
                next(null, {
                    msg: 'Record successfully saved!',
                    result: response,
                    success: true
                });
            });
        }
    ])
};

Users.prototype.getAllUsers = (next) => {
    usersDao.getAllUsers((err, response) => {
        if (err) {
            next({
                msg: err.msg,
                result: err,
                success: false
            }, null)
        }

        next(null, {
            msg: '',
            result: response,
            success: true
        });
    });
};

Users.prototype.getUser = (user_id, next) => {
    usersDao.getUser(user_id, (err, response) => {
        if (err) {
            next({
                msg: err.msg,
                result: err,
                success: false
            }, null)
        }

        if (response && response.length > 0) {
            response = response[0];
        };

        next(null, {
            msg: '',
            result: response,
            success: true
        });
    });
};

Users.prototype.deleteUser = (user_id, next) => {
    usersDao.deleteUser(user_id, (err, response) => {
        if (err) {
            next({
                msg: err.msg,
                result: err,
                success: false
            }, null)
        }
        next(null, {
            msg: 'Record successfully deleted!',
            result: response,
            success: true
        });
    });
};

Users.prototype.updateUser = (user_id, data, next) => {
    usersDao.updateUser(user_id, data, (err, response) => {
        if (err) {
            next({
                msg: err.msg,
                result: err,
                success: false
            }, null)
        }
        next(null, {
            msg: 'Record successfully updated!',
            result: response,
            success: true
        });
    });
};

exports.Users = Users;
