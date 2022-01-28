// "socket.io": "^2.3.0"
// const io = require('socket.io')(5000);
// "socket.io-client": "^2.3.0"

const httpServer = require('http').createServer((req, res) => {
  // serve the index.html file
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(content));
  res.end(content);
});

const io = require('socket.io')(httpServer);

// the count state
let count = 0;

io.on('connect', function (socket) {
  // emit to the newly connected client the existing count
  socket.emit('counter updated', count);

  // we listen for this event from the clients
  socket.on('counter clicked', () => {
    console.log('event from frontend!');

    // increment the count
    count++;
    // emit to EVERYONE the updated count
    io.emit('counter updated', count);
  });
});
httpServer.listen(5000, () => {
  console.log('go to http://localhost:5000');
});
