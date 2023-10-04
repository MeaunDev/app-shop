
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Shoptify</title>
    </Head>
      <div className={styles.contain}>
        <div>
          <h2>my website to shop now </h2>
          <div>
            <img src='/shopping.svg' width={300} height={300} alt='shopping' />
            <p>well to shopping at my websited</p>
            <Link href='/products' className={styles.btn}>total of my products</Link>
          </div>
        </div>
      </div>
    </>
  )
}
