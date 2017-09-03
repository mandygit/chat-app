var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.emit('createMessage', {
    from: 'Mandy',
    text: 'Hey',
});

socket.on('newMessage', function(message) {
    console.log('New Message', message);
});