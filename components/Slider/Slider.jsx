"use client"
import React from 'react'
import './slider.css'
import Image from 'next/image'
import { motion } from "framer-motion"
function Slider() {
  return (
    <>
   
    <motion.div  initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }} className="slider mb-20" behaviour="scroll" direction="left">
      <div className="slide-track">
        <div className="slide "><Image src="/assets/images/bb-house.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/bg.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/cf.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/cl.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/co.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/dn.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/f.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/fc.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/id.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide"><Image src="/assets/images/m.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/miff.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/nf.png" width={100} height={100} alt='LogoImage1'></Image></div>
    
   
        <div className="slide "><Image src="/assets/images/bb-house.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/bg.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/cf.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/cl.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/co.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/dn.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/f.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/fc.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/id.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide"><Image src="/assets/images/m.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/miff.png" width={100} height={100} alt='LogoImage1'></Image></div>
        <div className="slide "><Image src="/assets/images/nf.png" width={100} height={100} alt='LogoImage1'></Image></div>
       
      </div>
    </motion.div>
    </>
  )
}

export default Slider