import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { storeWrapper } from '../src/store';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default storeWrapper.withRedux(App);