'use strict';

// messages routes use messages controller
var messages = require('../controllers/messages');
var authorization = require('./middlewares/authorization');

// message authorization helpers

module.exports = function(app) {

    app.get('/messages', messages.all);
    app.post('/messages', messages.create);
    // app.get('/messages/:messageId', messages.show);
    // app.put('/messages/:messageId', authorization.requiresLogin, hasAuthorization, messages.update);
    // app.del('/messages/:messageId', authorization.requiresLogin, hasAuthorization, messages.destroy);

    // Finish with setting up the messageId param

};
