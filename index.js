var express = require('express');
var server = express();

server.use('/', express.static(__dirname + '/home'));
server.listen(process.env.PORT || 3000);
