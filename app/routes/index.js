/*jshint camelcase: false */

'use strict';

module.exports = function(app,config, middleware) {

    app.route('/')
        .get(function onRequest(req, res) {
            res.render('index');
        });

    
};
