"use client"

import { motion } from "framer-motion"

import React, { useEffect } from 'react'

function Search() {
 
  return (
    <>
    <motion.div   initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }} className='number_zone'>1</motion.div>
    <motion.h1  initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5  }} className=' orange_gradient text-center  font-bold m-3 text-3xl '>Search</motion.h1>
    <section className="w-full flex-center flex-col mb-16 " >
    <motion.h1   initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5  }} className="semi_head_text  text-center text-5xl m-2">
      Shape your goals. </motion.h1>
   <motion.p  initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5  }} className="desc text-center">Find the freelancer that's suits your project by first searching in the field of expertise
   available.</motion.p>
 
      </section>
    

    </>
  )
}

export default Search