import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <section>
    <div className='Logo container lg:py-8 py-8 w-full flex flex-row'>
        <img src='/Images/School-Logo.png' className='h-1/4 w-28 px-6 ml-6'/>
        <h1 className='text-3xl px-4 md:px-2'>RVS Matriculation Higher Secondary School</h1>
        <div className='lg:pl-[28rem] mr-2 right-5 lg:pt-2 pt-8 '>
          <Link to='/'>
            <button className='rounded-full bg-cyan-600 py-2 px-4 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-cyan-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">'>Login</button>
          </Link>
        </div>
   </div>

    </section>
  )
}

export default Logo