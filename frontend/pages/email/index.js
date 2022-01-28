import { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';

import AppCtx from '../../context/context';

// ==============================================

let socket = null;

function handleClick() {
  socket.emit('counter clicked');
}

// ==============================================

export default function Email() {
  const appCtx = useContext(AppCtx);

  // after component mount...
  useEffect(() => {
    socket = io('ws://localhost:5000');

    socket.on('counter updated', function (countFromServer) {
      console.log('event from backend!');
      appCtx.setCount(countFromServer);
    });
  }, []);

  return (
    <>
      EMAIL
      <button onClick={handleClick}>Counter: {appCtx.count}</button>;
    </>
  );
}
