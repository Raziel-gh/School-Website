import React from 'react'

function About() {
  return (
    <section className='About w-full h-1/2 grid md:grid-cols-3 text-black mt-8'>
        <div className='p-8 mx-12'>
            <span className='bar w-full bg-slate-500'/>
            <ul className='side-links list-disc'>
                <li className='link'>The School</li>
                <li className='link'>The Faculty</li>
                <li className='link'>The Management</li>
            </ul>
        </div>
        
        <div className='p-8 mx-12'>Main Content</div>
        <div className='p-8 mx-12'>Side Content</div>
    </section>
  )
}

export default About