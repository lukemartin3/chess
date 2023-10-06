var board;
var game;

window.onload = function() {
    initGame();
};

// setup my socket client
var socket = io();

window.onClick = function(e){
    socket.emit('message', 'hello Player');
};

var initGame = function() {
    var cfg = {
        draggable: true,
        position: 'start',
        onDrop: handleMove,
    };

    board = new ChessBoard('gameBoard', cfg);
    game = new Chess();
};

var handleMove = function(source, target) {
    var move = game.move({from: source, to: target});

    if (move === null) return 'snapback';
};