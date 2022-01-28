import { AppCtxProvider } from '../context/context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppCtxProvider>
      <Component {...pageProps} />
    </AppCtxProvider>
  );
}

export default MyApp;
