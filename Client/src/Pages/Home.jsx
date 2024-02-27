import React from 'react'
import Carousel from '../Components/Carousel'
import Header from '../Components/Header'
import Footer from '../Components/Footer'



function Home() {
  return (
    
    <div className='Home w-full'>
    <Header/>
        <section className='Carousel'>
            <Carousel/>
        </section>

        <section className="announcements max-w-[100%] lg:pl-[5rem] p-8 gap-12 grid md:grid-cols-2 md:h-[500px] border-black/100 border-solid w-full m-auto">
            <div className='ann-1 max-w-[500px] h-[30rem] rounded-xl text-black flex flex-col border-black border-solid  text-center items-center justify-self-center'>
                <h1 className='text-xl'>Announcement 1</h1>
                
                    <img src="/Images/Ann-1.jpg" alt="" className="ann-1-img w-[95%] h-[90%] rounded-xl shadow-2xl shadow-black duration-500" />
                
            </div>
            <div className='ann-1 max-w-[500px] h-[30rem] rounded-xl text-black flex flex-col border-black border-solid  text-center items-center justify-self-center'>
                <h1 className='text-xl'>Announcement 2</h1>
                
                    <img src='/Images/Ann-2.jpg' className='ann-2-img w-[95%] h-[90%] rounded-xl shadow-2xl shadow-black duration-500'/>
                
            </div>
        </section>

        <h2 className='text-xl text-black mt-24 m-8 text-center'>Quick Links</h2>
        <section className='quick-links mt-[20px] max-w-[100%] lg:pl-[5rem] p-8 gap-16 auto-cols-auto grid md:grid-cols-4 md:h-[500px] border-black/100 border-solid w-full m-auto'>
            
            <div className='link-1 w-[250px]  h-[300px] m-4 md:pl-2 justify-self-center text-center text-black'>
                <h5>Admissions</h5>
                <img src='/Images/Ann-1.jpg' className='w-[95%] shadow-2xl shadow-black h-[80%] ml-2 rounded-2xl'></img>
                <button className='my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded justify-self-center'> Admissions </button>
                </div>
            <div className='link-1 w-[250px]  h-[300px] m-4 md:pl-2 justify-self-center text-center text-black'>
                <h5>Grades</h5>
                <img src='/Images/Ann-1.jpg' className='w-[95%] shadow-2xl shadow-black h-[80%] ml-2 rounded-2xl'></img>
                <button className='my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded'> Grades </button>
                </div>
            <div className='link-1 w-[250px]  h-[300px] m-4 md:pl-2 justify-self-center text-center text-black'>
                <h5>Contact</h5>
                <img src='/Images/Ann-1.jpg' className='w-[95%] shadow-2xl shadow-black h-[80%] justify-self-center ml-2 rounded-2xl'/>
                <button className='my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded'> Contact </button>
                </div>
            <div className='link-1 w-[250px]  h-[300px] m-4 md:pl-2 justify-self-center text-center text-black'>
                <h5>Career</h5>
                <img src='/Images/Ann-1.jpg' className='w-[95%] shadow-2xl shadow-black h-[80%] ml-2 rounded-2xl'></img>
                <button className='my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded'> Career </button>
                </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Home