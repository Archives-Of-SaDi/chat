const { Server } = require('socket.io');

const io = new Server(5000, { cors: { origin: ['http://localhost:3000'] } });

io.on('connection', (socket) => {
  socket.on('send message', (msg) => {
    io.emit('receive message', msg);
  });
});
