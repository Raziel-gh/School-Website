import React from 'react'

function Footer() {
  return (
    <section className='min-h-24 w-full bg-slate-900'>
        <div className='content mt-8 w-full grid md:grid-cols-2'>
            <div className="contact p-8 ">
                <h5>Contact:</h5>
                <p>Lan: +91-86675 27691</p>
                <p>Mobile: +91-86675 27691</p>
                  <p> Email: rvsschools1@gmail.com</p>
            </div>
            <div className="location p-8 ">
                <h5>Location:</h5>
                <p>RVS Matriculation Higher Secondary School</p>
                <p>232, Reddiarur</p>
                <p>Reddiarmadam, Coimbatore</p>
            </div>
        </div>
    </section>
  )
}

export default Footer