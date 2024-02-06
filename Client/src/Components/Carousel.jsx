/* eslint-disable react/jsx-key */
import React from 'react'
import { useState } from 'react'
import {BsChevronCompactRight, BsChevronCompactLeft} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const slides = [
    "/Carousel/School1.jpg",
    '/Carousel/School2.jpg',
    '/Carousel/School3.jpg',
    '/Carousel/School4.jpg',
    '/Carousel/School5.jpg',
]



function Carousel() {

const [currIndex, setCurrIndex] = useState(3)

const prevSlide = ()=>{
    const isFirstImg = currIndex === 0
    const newIndex = isFirstImg ? (slides.length-1) : (currIndex - 1)
    setCurrIndex(newIndex)
}
const nextSlide = ()=>{
    const isLastImg = currIndex === slides.length-1
    const newIndex = isLastImg ? 0 : (currIndex + 1)
    setCurrIndex(newIndex)
}

const goToSlide = (pointerIndex)=>{
    setCurrIndex(pointerIndex)
}

  return (
    <div className='max-w-[1000px] h-[500px] w-full m-auto py-16 px-4 relative group'>
        <div style={{backgroundImage:`url(${slides[currIndex]})`}} className="w-full shadow-lg shadow-black/35 h-full rounded-2xl bg-center bg-cover duration-500"></div>
        <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-2xl p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>

        <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-2xl p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
        <div className='flex top-4 py-2 justify-center'>
            {slides.map((slide,index)=>(
                <div key={index} onClick={()=>goToSlide(index)} className='text-2xl cursor-pointer'>
                    <RxDotFilled />
                </div>
            ))}
        </div>

    </div>
  )
}

export default Carousel