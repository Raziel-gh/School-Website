import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

function Header() {
  return (
    <section className='min-h-24 w-full bg-header '>
        <Logo/>
        <Navbar/>
    </section>
  )
}

export default Header