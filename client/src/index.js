const { io } = require('socket.io-client');

const socket = io('ws://localhost:5000');

socket.on('connect', () => {
  let item = document.createElement('li');
  item.textContent = `You connected with id: ${socket.id}`;
  messages.appendChild(item);
});

socket.on('receive message', (msg) => {
  let item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
});

let form = document.getElementById('form');
let input = document.getElementById('input');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('send message', input.value);
    input.value = '';
  }
});
