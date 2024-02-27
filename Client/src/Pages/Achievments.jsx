import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Achievments() {

  const [content, setContent] = useState("Academics")

  function useContent(content){
    if(content === "Academics")
    return(
        <div className='Academics'>Academics</div>
        )
    else if(content === "Sports")
    return(
        <div className='Sports'>Sports</div>
        )
    else if(content === "Awards")
    return(
        <div className='Awards'>Awards</div>
        )
  }


  return (
    <div>
      <Header/>
    <section className='Contact w-full h-1/2  text-black mt-8 grid grid-cols-4'>
        <div className='p-8 mx-12'>
        <ul className='side-links list-outside list-decimal'>
                <li className='link hover:underline hover:text-blue-600 cursor-pointer transition-all' onClick={()=>setContent("Academics")}>Academics</li>
                <li className='link hover:underline hover:text-blue-600 cursor-pointer transition-all' onClick={()=>setContent("Sports")}>Sports</li>
                <li className='link hover:underline hover:text-blue-600 cursor-pointer transition-all' onClick={()=>setContent("Awards")}>Awards</li>
            </ul>
        </div>
        <div className='p-8 mx-12 col-span-2'>{useContent(content)}</div>

    </section>
    <Footer/>
    </div>
  )
}

export default Achievments