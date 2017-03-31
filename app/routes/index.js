/*jshint camelcase: false */

'use strict';

module.exports = function(app,config, middleware) {
	console.log('ROUTES');
	
    app.route('/')
        .get(function onRequest(req, res) {
            res.render('index');
        });

    
};
