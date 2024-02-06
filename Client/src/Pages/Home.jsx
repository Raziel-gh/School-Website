import React from 'react'
import Carousel from '../Components/Carousel'



function Home() {
  return (
    <div className='Home'>
        <section className='Carousel'>
            <Carousel/>
        </section>

        <section className="announcements max-w-[1200px] lg:pl-[5rem] p-8 gap-8 grid md:grid-cols-2 h-[500px] border-black/100 border-solid w-full m-auto">
            <div className='ann-1 max-w-[500px] h-[30rem] rounded-xl text-black flex flex-col border-black border-solid  text-center items-center justify-center'>
                <h1 className='text-xl'>Announcement 1</h1>
                
                    <img src="/Images/Ann-1.jpg" alt="" className="ann-1-img w-[95%] h-[90%] rounded-xl  hover:shadow-2xl shadow-black duration-500" />
                
            </div>
            <div className='ann-1 max-w-[500px] h-[30rem] rounded-xl text-black flex flex-col border-black border-solid  text-center items-center justify-center'>
                <h1 className='text-xl'>Announcement 2</h1>
                
                    <img src='/Images/Ann-2.jpg' className='ann-2-img w-[95%] h-[90%] rounded-xl  hover:shadow-2xl shadow-black duration-500'/>
                
            </div>
        </section>

        
    </div>
  )
}

export default Home