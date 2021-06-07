import './style/global.css'
import { ChallangesProvider } from "./contexts/ChallangesContexts";


function MyApp({ Component, pageProps }) {
  return (
    <ChallangesProvider>
        <Component {...pageProps} />
    </ChallangesProvider>
  )
}

export default MyApp
