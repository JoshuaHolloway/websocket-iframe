import { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';

import Frame from '../comps/Frame';

// import styles from '../styles/Home.module.css';

// ==============================================

export default function Home() {
  return (
    <>
      <Frame route='/email1' />
      <Frame route='/email2' />
    </>
  );
}
