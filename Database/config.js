var OrientDB = require('orientjs');

var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   'kr'
});

var db = server.use({
   name:     'network',
   username: 'root',
   password: 'kr'
});

module.exports.db = db;