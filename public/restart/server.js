const express = require('express')
const socketIO = require('socket.io')
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

server.listen(3000, () => {
  console.log('Server started');
})

io.on('connection', (socket) => {
  console.log('connected')

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  })

});