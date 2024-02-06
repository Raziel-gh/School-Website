import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav>
    <div className='flex z-50 text-white bg-navbar lg:py-6 px-20 py-5 flex-row mb-0 list-none justify-evenly'>
            <Link to="/">
                <li className='hover:text-cyan-500 hover:underline transition-all'>Home</li>
            </Link>
            <Link to="/About">
                <li className='hover:text-cyan-500 hover:underline transition-all'>About</li>
            </Link>
            <Link to="/Contact">
                <li className='hover:text-cyan-500 hover:underline transition-all'>Contact</li>
            </Link>
            <Link to="/Achievments">
                <li className='hover:text-cyan-500 hover:underline transition-all'>Achievments</li>
            </Link>
            <Link to="/Events">
                <li className='hover:text-cyan-500 hover:underline transition-all'>Events</li>
            </Link>
            <ul className="md:hidden navlist flex flex-row gap-7 justify-evenly">This</ul>
    </div>
 </nav>
  )
}

export default Navbar