
import Head from 'next/head'
import React from 'react'
import styles from "@/styles/Detail.module.css"

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=12")
  const data = await res.json()
  const paths = data.products.map((item) => {
    return {
      params: { id: item.id.toString() }
    }
  })
  //console.log(paths)
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  const id = params.id
  const res = await fetch("https://dummyjson.com/products/" + id)
  const data = await res.json()

  // console.log(data)
  return {
    props: { products: data }
  }
}


export default function id({ products }) {

  return (
    <div>
      <Head>
        <title>{products.title}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={products.thumbnail} alt={products.thumbnail} width={300} height={300} />
        </div>
        <div>
          <h1>{products.title}</h1>
          <span>{products.description}</span>
          <p>{products.category}</p>
          <span>brand : {products.brand}</span>
          <h2>price : $ {products.price}</h2>
        </div>
      </div>
    </div>
  )
}
