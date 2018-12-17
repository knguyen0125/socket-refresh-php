const socket = io('http://localhost:3000');

// Reload on disconnection to socket. This is typically because the server restarted due to nodemon
socket.on('reconnect', function() {
  location.reload();
})