import React from 'react'
import Link from 'next/link'


export default function Navbar() {
    return (
        <div className='nav'>
            <Link href='/'>
                <img src="/logo.png" alt="logo" width={50} height={50} />
            </Link>
            <div className="menu">
                <Link href='/'>Home</Link>
                <Link href='about'>About</Link>
                <Link href='products'>Products</Link>
            </div>
        </div>
    )
}
