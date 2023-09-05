"use client"
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { Divider } from '@mui/material'

function Stats() {
  
{
  return (<>

<motion.div
      className='w-screen overflow-hidden rounded-md outline_orange_card_stats grid grid-flex grid-cols-3 grid-rows-1 gap-4 mb-16 mt-16 content-center text-center'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Adjust the column width as needed
        gridTemplateRows: 'auto',
      }}
    >
   <div className='ml-28 mt-8 mb-8 flex place-content-between '>
    <div >
    <h1 className='font-extrabold text-5xl mb-4  '>98</h1>
    <p className='  text-2xl font-semibold  '>Projects done perfectly</p>
    </div>
    <Divider orientation='vertical' role="presentation" className='w-12 '/>
    </div>
    
    <div className='ml-28 mt-8 mb-8 flex place-content-between'>
    <div>
    <h1 className='font-extrabold text-5xl mb-4  '>98</h1>
    <p className=' font-semibold text-2xl  '>Projects done perfectly</p>
    </div>
    <Divider orientation='vertical' role="presentation"/>
    </div>
    
    <div className='ml-28 mt-8 ml mb-8 flex place-content-between'>
    <div>
    <h1 className='font-extrabold text-5xl mb-4  '>98</h1>
    <p className=' font-semibold text-2xl  '>Projects done perfectly</p>
    </div>
    
    </div>
   </motion.div>
   

    </>
  )
}
}

export default Stats