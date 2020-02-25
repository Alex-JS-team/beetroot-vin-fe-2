var express = require('express');
var server = express();

server.use('/', express.static(__dirname + '/home'));
server.listen(8080);
