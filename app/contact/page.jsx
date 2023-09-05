"use client"
import Lottie from 'lottie-react'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import animationDataSent from '../../public/assets/animation_ljzypoj2.json'
import animationDataFull from '../../public/assets/animationBefore.json'


function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [animationOpacity, setAnimationOpacity] = useState(1);
  const [sentAnimationOpacity, setSentAnimationOpacity] = useState(0);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_ju1kt0u',
        'template_lvu0s29',
        {
          from_name: form.name,
          to_name: "PITCHINI",
          from_email: form.email,
          to_email: "mohamedaziz.kefi@esprit.tn",
          message: form.message,
        },
        'FE-P6BfBMGm_syNUn'
      )
      .then(
        () => {
          setLoading(false);
          // alert("Your Email has been sent to PITCHINI. We will get back to you as soon as possible.");
          setAnimationOpacity(0);
          setSentAnimationOpacity(1);
      
          // After 2 seconds, switch the animations back
          setTimeout(() => {
            setAnimationOpacity(1);
            setSentAnimationOpacity(0);
          }, 2000);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };
  return (<>
  <motion.section initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }} className="w-full flex-center flex-col  " >
    <h1 className="semi_head_text  text-center text-5xl m-2">
      Get in Touch. </h1>
   <p className="desc text-center">We'll always be glad to help you with your needs and answer all your questions.</p>

   
      </motion.section>

   <div  initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }}
    className="mx-auto w-full overflow-hidden mt-4 mb-4 space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
  >
  <div className=" grid-flex  grid  grid-cols-1 sm:grid-cols-2 gap-4 ">
      {/* Left Div */}
      <motion.div initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }} className=' m-3  sm:order-1 flex justify-center items-start '>
      
       <Lottie animationData={animationDataSent} style={{opacity:sentAnimationOpacity, width:400,height:400,position: 'absolute', top: 500, left: 50 }} className='mt-18 sm:mt-2'/> 
      <Lottie animationData={animationDataFull} style={{opacity:animationOpacity , position: 'relative', top: 0, left: 0 , scale:2}} className=' mr-8 lg:mr-24' />
 
      </motion.div>

      {/* Right Div */}
      <motion.div className='order-2  ' initial={{ opacity: 0 , scale:0.5 }}
        animate={{ opacity: 1 , scale:1 }}
        transition={{ duration: 0.5 }}>
      <div
        
        className='bg-white bg-opacity-40 border backdrop-blur-md w-full border-gray-400 p-8 rounded-2xl'
      >
       
        <h3 className='mt-5  font-bold leading-[1.15] text-black  text-center text-2xl m-2'>Contact us.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-gray-300 rounded-lg  border border-gray-400 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-gray-300 rounded-lg  border border-gray-400 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-gray-300 rounded-lg border border-gray-400 font-medium'
            />
          </label>

          <button
            type='submit'
            className='black_btn h-12 w-1/2 self-center '
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
       </motion.div>
    </div>
    </div>
   
</>
  )
}

export default Contact