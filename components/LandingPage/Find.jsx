
'use client'
import {motion } from 'framer-motion'
import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import GroupIcon from '@mui/icons-material/Group';

function Find() {
  return (
    <>
    <motion.div   initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }}
    className='number_zone'>2</motion.div>
    <h1 className=' orange_gradient text-center  font-bold m-3 text-3xl '>Find</h1>
    <motion.section  initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }} className="w-full flex-center flex-col  " >
    <h1 className="semi_head_text  text-center text-5xl m-2">
      Choose your worker. </h1>
   <p className="desc text-center">Find a large selection of expert freelancers , in nearly any domain , specially selected
   by PITCHINI and discover their portfolio.
   </p>  
   </motion.section>
   <motion.div  initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }}
    className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
  >
  <div className=" grid-flex  grid  grid-cols-1 sm:grid-cols-2 gap-4 ">
      {/* Left Div */}
      <div className='mt-10 m-3 sm:order-1'>
      
        <div className='flex align-baseline items-center mt-8' id='title'>
          <ToggleButton>
          <GppGoodOutlinedIcon></GppGoodOutlinedIcon>
          </ToggleButton>
          <h1 className=' text-gray-800 text-2xl font-semibold ml-5'>SPECIAL  SELECTION</h1>
        </div>
        <p className='text-gray-500 text-lg mt-5'>
          PITCHINI is a e-Agency , therefore the freelancers are selected based on their skills , experience and liability
        </p>
        <div className='flex align-baseline items-center mt-8' id='title'>
          <ToggleButton>
         <GroupIcon/>
          </ToggleButton>
          <h1 className=' text-gray-800 text-2xl font-semibold ml-5'>GROUP SELECTION</h1>
        </div>
        <p className='text-gray-500 text-lg mt-5'>
        For bigger Projects , PITCHINI Groups is your option. Recruit Pre-organized teams composition for your End-To-End Projects and more. 
        </p>
      </div>

      {/* Right Div */}
      <div className='order-2 ml-12 mt-16'>
    
    
            <motion.div  whileHover={{ scale: 1.3 }} className="w-full  mr-auto px-4 pt-24 md:pt-0">
              <img
              
               
                className="w-full rounded-lg shadow-xl outline_orange_card"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-15deg) rotateX(3deg) rotate(3deg)",
                }}
                src="/assets/images/ProfileCard.png "
              />
            </motion.div>
            
      </div>
    </div>
    </motion.div>
    </>
  )
}

export default Find