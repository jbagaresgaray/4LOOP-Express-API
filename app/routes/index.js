/*jshint camelcase: false */

'use strict';

// ======================== VALIDATION ============================ //
var validatorUser = require('../validation/users');


// ======================== ROUTING ============================ //
var users = require('./routing/users');



module.exports = function(app,config, middleware) {
	console.log('ROUTES');
	
    app.route('/')
        .get(function onRequest(req, res) {
            res.render('index');
        });

    


    app.route(config.api_version + '/users')
    	.get(users.getAllUsers)
    	.post(validatorUser.validateUser,users.createUser);

    app.route(config.api_version + '/users/:user_id')
    	.get(users.getUser)
    	.delete(users.deleteUser)
    	.put(validatorUser.validateUser,users.updateUser);
};
