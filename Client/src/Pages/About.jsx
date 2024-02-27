import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'



function About() {
    
    const [content, setContent] = useState("School")

    function useContent(content){
        if(content==="School"){
            return(
                <div className='p-8'>
                    <h5 className='font-bold text-lg pb-4'>The School</h5>
                    <p className='text-justify pb-4'>The RVS School was established in 1985 by Thiru. K. Kuppusamy under the RVS Educational Trust. Classes were originally offered from LKG to IX and have since expanded to include PRE-KG to Std. XII. The school currently has over 900 students and provides a state-of-the-art learning environment.</p>
                    <h5 className='font-bold text-lg pb-4'>The Vision</h5>
                    <p className='text-justify pb-4'>The vision of RVS Matriculation Higher Secondary School is to empower its students to become lifelong learners and active contributors to the global community. The school seeks to provide its students with the knowledge, skills, and values necessary to succeed in a rapidly changing world. The core values of the school are respect, responsibility, resilience, integrity, care, and harmony, and the school aims to foster these values in its students so they can participate in and contribute to the global community in a meaningful way. The school&apos;s goal is to empower its students to acquire, demonstrate, articulate, and value knowledge and skills that will support them in their personal and professional lives.</p>
                    <h5 className='font-bold text-lg pb-4'>The Mission</h5>
                    <p className='text-justify pb-4'>The mission of the school is to provide leadership and inspiration for learning and human development in rural communities. The school is dedicated to promoting education and human development in rural areas and providing students with the knowledge, skills, and values necessary to become successful and responsible members of their communities. The school aims to be a leader in promoting learning and development in rural areas and to inspire others to do the same.</p>
                    <h5 className='font-bold text-lg pb-4'>The Philosophy</h5>
                    <p className='text-justify pb-4'>The school believes in the dignity and worth of all its students and is committed to providing a supportive and challenging learning environment where they can achieve their full potential. It values respect, responsibility, resilience, integrity, care, and harmony and expects its students to demonstrate these values. The school recognizes the importance of nurturing a caring and challenging environment that encourages students to be respectful, responsible, and resilient and to rise to the challenges of life.</p>
                    <h5 className='font-bold text-lg pb-4'>The Motto</h5>
                    <p className='text-justify pb-4'>Discipline, Knowledge and Excellence</p>
                </div>
            )
        }
        else if(content==="Faculty"){
            return(
                <div>Faculty</div>
            )
        }
        else if(content==="Management"){
            return(
                <div>Management</div>
            )
        }
    }


  return (
    <div className='About w-full'>
    <Header/>
    <section className='About w-full h-1/2 grid md:grid-cols-5 text-black mt-8'>
        <div className='p-8 mx-12'>
            <span className='bar w-full bg-slate-500'/>
            <ul className='side-links list-disc'>
                <li className='link hover:underline hover:text-blue-600 cursor-pointer transition-all' onClick={()=>setContent("School")}>The School</li>
                <li className='link hover:underline hover:text-blue-600 cursor-pointer transition-all' onClick={()=>setContent("Faculty")}>The Faculty</li>
                <li className='link hover:underline hover:text-blue-600 cursor-pointer transition-all' onClick={()=>setContent("Management")}>The Management</li>
            </ul>
        </div>

        <div className='p-8 mx-12 col-span-3'>
            {useContent(content)}
        </div>
        <div className='p-8 mx-12'>Side Content</div>
    </section>
    <Footer/>
    </div>
  )
}

export default About