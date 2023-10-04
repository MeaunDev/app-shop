import React from 'react'
import Head from 'next/head'
import styles from "@/styles/Products.module.css"
import Link from 'next/link'


//https://dummyjson.com/products?limit=12

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=12")
  const data = await res.json()

  // console.log(data)
  return {
    props: { products: data.products }
  }
}

export default function index({ products }) {
  return (

    <div>
      <Head>
        <title>our products</title>
      </Head>
      <div className={styles.comtainer}>
        {products.map((item) => {
          return (
            <div key={item.id}>
              <Link href={`/products/${item.id}`}>
                <img src={item.thumbnail} alt="img" width={300} height={300} />
              </Link>
              <h2 className={styles.title}>{item.title}</h2>
              <div className={styles.price}>
                <p>price</p>
                <p className={styles.p}>${item.price}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
