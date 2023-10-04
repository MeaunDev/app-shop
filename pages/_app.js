import '@/styles/globals.css'

import Layont from '@/components/Layont'

export default function App({ Component, pageProps }) {
  return (
    <Layont>
      <Component {...pageProps} />
    </Layont>
  )
}
