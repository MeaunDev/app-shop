import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function about() {
  return (
    <div>
      <Head>
        <title>about us</title>
      </Head>
     <div className={styles.contain}>
      <div>
        <h2>connect to Us</h2>
        <div>
          <img src='/about.svg' width={300} height={300} alt='shopping'/>
          <p>well to shopping at my websited</p>
          <Link href='/products' className={styles.btn}>total of my products</Link>
        </div>
      </div>
    </div>
    </div>
  )
}
