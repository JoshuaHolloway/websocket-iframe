import { useState, createContext } from 'react';

// ==============================================

const AppCtx = createContext({
  count: 0,
  setCount: () => {},
});

// ==============================================

const AppCtxProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const context = {
    count,
    setCount,
  };

  return <AppCtx.Provider value={context}>{children}</AppCtx.Provider>;
};

// ==============================================

export { AppCtxProvider };
export default AppCtx;
