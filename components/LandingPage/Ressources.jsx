'use client'
import {motion} from 'framer-motion'
import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import GlobeVisualization from './Globe';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';

function Ressources() {

{
  return (
  <>
   <motion.section initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }} className="w-full flex-center flex-col mt-8 " >
    <h1 className="semi_head_text  text-center text-5xl m-2">
      Ressources Selection </h1>
   <p className="desc text-center">Well picked world wide freelancers , full time availability and support are the key words of PITCHINI.</p>

   
      </motion.section>
      <motion.div initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }}
    className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8" >
  <div className=" grid-flex  grid  grid-cols-1 sm:grid-cols-2 gap-4 ">
      {/* Left Div */}
      <div className='mt-10 m-3 sm:order-1'>
        <div className='flex align-baseline items-center ' id='title'>
          <ToggleButton>
          <LanguageSharpIcon/>
          </ToggleButton>
          <h1 className=' text-gray-800 text-2xl font-semibold ml-5'>WORLDWIDE EXPERTS</h1>
        </div>
        <p className='text-gray-500 text-lg mt-5'>
          Discover a large selection of talented workers , from all around the world.
          Get in touch with them  and give life to your ideas , together. 
        </p>
        <div className='flex align-baseline items-center mt-8' id='title'>
          <ToggleButton>
          <CreditScoreOutlinedIcon/>
          </ToggleButton>
          <h1 className=' text-gray-800 text-2xl font-semibold ml-5'>WORLDWIDE PAYMENTS</h1>
        </div>
        <p className='text-gray-500 text-lg mt-5'>
       PITCHINI accepts all time of payments as it proceeds to pay the freelancers in the currency he wants , 
       giving worldwide interactions.
        </p>
        <div className='flex align-baseline items-center mt-8' id='title'>
          <ToggleButton>
          <AccessTimeOutlinedIcon/>
          </ToggleButton>
          <h1 className=' text-gray-800 text-2xl font-semibold ml-5'>FULL TIME AVAILABILITY</h1>
        </div>
        <p className='text-gray-500 text-lg mt-5'>
          As PITCHINI offers worldwide freelancers , work flow and online support is available 24/7.
          Anytime , Anyplace.
        </p>
      </div>

      {/* Right Div */}
      <motion.div whileHover={{ scale: 1.2 }} className='order-2'>
        <GlobeVisualization />
      </motion.div>
    </div>
    </motion.div>
</>
  )
}
}

export default Ressources;