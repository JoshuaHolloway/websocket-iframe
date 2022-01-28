const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// ==============================================

// middleware:
const cors = require('cors');
app.use(cors());

// ==============================================

// endpoints:
app.get('/josh', function (req, res) {
  console.log('[GET] /josh');

  res.status(200).json({ message: 'success' });
});

// app.post('/josh')

// ==============================================

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

// ==============================================

http.listen(5000, () => {
  console.log('go to http://localhost:5000');
});
