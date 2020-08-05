import '../styles/globals.css'
import '../styles.css';
import { ReactQueryDevtools } from 'react-query-devtools'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default MyApp
