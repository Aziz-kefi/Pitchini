'use client'
import {motion } from 'framer-motion'
import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import MessageUI from '@components/MessageHolder';
function Deal() {
  return (
    <>
    <motion.div   initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }}
    className='number_zone'>3</motion.div>
    <motion.h1 initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }} className=' orange_gradient text-center  font-bold m-3 text-3xl '>Deal</motion.h1>
    <motion.section initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }} className="w-full flex-center flex-col mb-8 " >
    <h1 className="semi_head_text  text-center text-5xl m-2">
      Finish your offer </h1>
   <p className="desc text-center">Deal with the freelancers you've selected using our real-time chat ,
   choose your deadlines and follow your checkpoints.</p>

   
      </motion.section>
      <motion.div  initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }}
    className="mx-auto max-w-screen-xl mt-4 mb-4 space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
  >
  <div className=" grid-flex  grid  grid-cols-1 sm:grid-cols-2 gap-4 ">
      {/* Left Div */}
      <div className=' m-3 sm:order-1 mr-12'>
      
      <MessageUI backgroundColor="bg-blue-400" content="Hello!" textColor="text-white" />
  <MessageUI backgroundColor="bg-gray-300" content="How are you?" textColor="text-black" />
  <MessageUI backgroundColor="bg-blue-400" content="I'm doing great!" textColor="text-white" />
  <MessageUI backgroundColor="bg-gray-300" content="How are you?" textColor="text-black" />
      </div>

      {/* Right Div */}
      <div className='order-2 ml-12 '>
    
      <div className='flex align-baseline items-center ' id='title'>
          <ToggleButton>
          <GppGoodOutlinedIcon></GppGoodOutlinedIcon>
          </ToggleButton>
          <h1 className=' text-gray-800 text-2xl font-semibold  ml-5'>SPECIAL  SELECTION</h1>
        </div>
        <p className='text-gray-500 text-lg mt-5'>
          PITCHINI is a e-Agency , therefore the freelancers are selected based on their skills , experience and liability
        </p>
        <div className='flex align-baseline items-center mt-8' id='title'>
          <ToggleButton>
          <CreditScoreOutlinedIcon/>
          </ToggleButton>
          <h1 className=' text-gray-800 text-2xl font-semibold ml-5'>CUSTOMIZED PAYMENTS</h1>
        </div>
        <p className='text-gray-500 text-lg mt-5'>
         Settle your payment methods and duration as you deal with the freelancers , all type of payments are accepted 
         and proceeded inside PITCHINI.
        </p>
            
      </div>
    </div>
    </motion.div>
    </>
  )
}

export default Deal