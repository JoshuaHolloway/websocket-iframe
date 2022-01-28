import { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';

import Frame from '../comps/Frame';

import AppCtx from '../context/context';

// import styles from '../styles/Home.module.css';

// ==============================================

// storing socket connection in this global variable
let socket = null;

// ==============================================

function handleClick() {
  // we emit this event that increments the count on the server
  // and the updated count is emitted back via 'counter updated'
  socket.emit('counter clicked');
}

// ==============================================

export default function Home() {
  // const [count, setCount] = useState(0);
  const appCtx = useContext(AppCtx);

  // after component mount...
  useEffect(() => {
    // connect to the socket server
    socket = io('ws://localhost:5000');

    // when connected, look for when the server emits the updated count
    socket.on('counter updated', function (countFromServer) {
      console.log('event from backend!');

      // set the new count on the client
      // setCount(countFromServer);
      appCtx.setCount(countFromServer);
    });
  }, []);

  return (
    <>
      <Frame handleClick={handleClick} />
      <Frame handleClick={handleClick} />
      <button onClick={handleClick}>Counter: {appCtx.count}</button>;
    </>
  );
}
