var http = require('http');
var path = require('path');

var express = require('express');
var compression = require('compression');

var twitter = require('./twitter');

var app = express();
var server = http.Server(app);

var io = require('socket.io')(server);

var indexHTML = path.join(__dirname, '..', 'public', 'index.html');

var blueDotSize = 10;

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.static(path.join(__dirname, '..', 'public')));

server.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

io.on('connection', function(socket) {
  io.emit('size', blueDotSize);
});

twitter.on('tweet', function (data) {
  blueDotSize += 10
  io.emit('size', blueDotSize);
});
