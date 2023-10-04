import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layont({children}) {
  return (
    <div>
      <Navbar/>
        {children}
      <Footer/>
    </div>
  )
}
