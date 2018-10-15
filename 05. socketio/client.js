var io = require('socket.io-client');
var socket = io('http://localhost:3000');
// Send message to server
socket.emit('chat', {
    username: 'Ardi',
    message: 'Halo disana'
});

socket.on('chat', function(msg){
    console.log("[" + data.username + "] " + data.message);
});