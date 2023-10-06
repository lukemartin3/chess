var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

// socket server setup
var io = require('socket.io')(http);

io.on('conection', function(socket) {
    console.log('new connection');

    socket.on('message', function(msg) {
        console.log('Got message from client: ' + msg);
    });
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/default.html');
});

http.listen(port, function() {
    console.log('listening on *: ' + port);
});