import { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';

import Frame from '../comps/Frame';

import AppCtx from '../context/context';

// import styles from '../styles/Home.module.css';

// ==============================================

export default function Home() {
  // const [count, setCount] = useState(0);
  const appCtx = useContext(AppCtx);

  return (
    <>
      <Frame />
      <Frame />
    </>
  );
}
