var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// A user is connected
io.on('connection', function(socket){
    console.log('a user connected');

    // Broadcast to other user
    socket.broadcast.emit('chat', {
        username: 'Server',
        message: 'Ada orang baru join'
    });

    // Listen on chanel `chat`
    socket.on('chat', function(data){
        // Dapat pesan baru
        console.log("[" + data.username + "] " + data.message);
        // Kirim balasan
        socket.emit('chat', {
            username: 'Server',
            message: 'Halo juga'
        });
    });

});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
