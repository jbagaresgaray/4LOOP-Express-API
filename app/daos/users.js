'use strict';

var mysql = require('mysql');
var Database = require('../../app/utils/database').Database;
var db = new Database();


exports.checkUserUsername = (data,next)=>{
    var strSQL = mysql.format('SELECT * FROM users WHERE username LIKE ? LIMIT 1;', ['%' + data.username + '%']);
    db.query(strSQL, next);
};

exports.createUser = (data, next) => {
    var strSQL = mysql.format('INSERT INTO users(firstname,lastname,username,password) VALUES (?,?,?,?);', [
        data.firstname, data.lastname, data.username, data.password
    ]);
    db.insertWithId(strSQL, next);
};

exports.getAllUsers = (next) => {
    db.query('SELECT * FROM users;', next);
};

exports.getUser = (user_id, next) => {
    var strSQL = mysql.format('SELECT * FROM users WHERE user_id=? LIMIT 1;', [user_id]);
    db.query(strSQL, next);
};

exports.deleteUser = (user_id, next) => {
    var strSQL = mysql.format('DELETE FROM users WHERE user_id=?;', [user_id]);
    db.actionQuery(strSQL, next);
};

exports.updateUser = (user_id, data, next) => {
    var strSQL = mysql.format('UPDATE users SET firstname=?,lastname=?,username=?,password=? WHERE user_id=?;', [
        data.firstname, data.lastname, data.username, data.password, user_id
    ]);
    db.actionQuery(strSQL, next);
};
