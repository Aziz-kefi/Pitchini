'use client'
import React from 'react'
import {motion} from 'framer-motion'

function General() {
  return (
    <>
    <motion.section  initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.8 }} className="w-full flex-center flex-col" >
    <h1 className="head_text  text-center orange_gradient">
      Search.Find.Deal. </h1>
   <p className="desc text-center">PITCHINI is a Virtual agency , giving you  the opportunity to
   give life to any of your projects with the most skilled freelancers.</p>
   <div className='flex justify-center items-center mt-16'>
          <button type="button"
            className='black_btn p-12 h-12 font-normal mr-5 w-44' >
                <p className='text-lg'> Hire Details </p>
          </button>
          <button type="button" className="outline_orange_btn p-12 h-12 font-normal ml-4 w-44 shadow-md mr-5">
            <p className="text-lg">Join Crew </p>
          </button>
           
      </div>     
   <h3 className='mt-16 mb-16 text-gray-500 text-xl font-semibold'>PITCHINI IS TRUSTED BY</h3>
</motion.section>

</>
  )
}

export default General