import type { AppProps } from 'next/app'
import '../style/global.css'
import styles from './styles.module.scss'
import Nav from '../components/navbar/index'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.app}>
      <Nav></Nav>
      <div className={styles.nav__size}></div>
      <Component {...pageProps} />
    </div>
  )
}