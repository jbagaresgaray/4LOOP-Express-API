'use strict';

var cb = require('./../../../utils/callback');
var usersCtrl = require('../../../controllers/users').Users;
var users = new usersCtrl();

exports.createUser = (req, res) => {
    users.createUser(req.body, cb.setupResponseCallback(res));
};

exports.getAllUsers = (req, res) => {
    users.getAllUsers(cb.setupResponseCallback(res));
};

exports.getUser = (req, res) => {
    users.getUser(req.params.user_id, cb.setupResponseCallback(res));
};

exports.deleteUser = (req, res) => {
    users.deleteUser(req.params.user_id, cb.setupResponseCallback(res));
};

exports.updateUser = (req, res) => {
    users.updateUser(req.params.user_id, req.body, cb.setupResponseCallback(res));
};
