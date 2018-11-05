var io = require('socket.io-client');
var socket = io('http://localhost:3000');

// Init readline
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

var nama = "";

// Tanya Nama
console.log("Nama : ");
rl.on('line', function(line){
    if(nama == ""){
        // Tanya Nama
        nama = line;
        console.log("Namanya : " + nama);
    }
    else{
        // Send message to server
        socket.emit('chat', {
            username: nama,
            message: line
        });
    }
});

// Listen from Server
socket.on('chat', function(data){
    console.log("[" + data.username + "] " + data.message);
});