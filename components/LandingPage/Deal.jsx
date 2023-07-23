'use client'
import {motion , useAnimation } from 'framer-motion'
import React ,{ useState ,useEffect ,useRef } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import MessageUI from '@components/MessageHolder';
import Image from 'next/image';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useInView } from "react-intersection-observer"
function Deal() {
  const [showDiv, setShowDiv] = useState(false);
const {ref , inView}= useInView();
const animation= useAnimation();
useEffect(()=>{
  if(inView){
    animation.start({
      opacity:1,
      scale:1,
     
    })
  }
  if(!inView){
    animation.start({
      opacity:0,
      scale:0,
    })
  }
  console.log('Appearing on view:' ,inView);
},[inView])
  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <>
    <motion.div   initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }}
    className='number_zone'>3</motion.div>
    <motion.h1 initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }} className=' orange_gradient text-center  font-bold m-3 text-3xl '>Deal</motion.h1>
    <motion.section initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }} className="w-full flex-center flex-col mb-4 " >
    <h1 className="semi_head_text  text-center text-5xl m-2">
      Finish your offer </h1>
   <p className="desc text-center">Deal with the freelancers you've selected using our real-time chat ,
   choose your deadlines and follow your checkpoints.</p>

   
      </motion.section>
      <motion.div  initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }}
    className="mx-auto max-w-screen-xl  mb-4 space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
  >
  <div className=" grid-flex  grid  grid-cols-1 sm:grid-cols-2 gap-8 "    > 
    {/* Left Div */}
<div  className='sm:order-1 pb-6 mr-32 bg-transparent backdrop-blur-md top-0 border mt-8 shadow-2xl shadow-gray-400 w-full p-4 rounded-2xl'>
  <div ref={ref} className='flex flex-col '>
    <motion.div  
        animate={animation}
        transition={{ duration: 0.8 , delay:0.3 }} className='flex justify-end ml-4 mt-4'>
  
        <MessageUI
          backgroundColor='bg-blue-400'
          content="Hello, I came back to settle the job offer ! Project cost: 300$(USD) , Duration : 2 Months ,
           Deadline: 18 August."
          textColor='text-white'
          alignRight={true}
        />
      <Image src="/assets/images/user-circle-svgrepo-com.svg"
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'/>
    </motion.div>
    <motion.div    
        animate={animation}
        transition={{ duration: 0.8 , delay:1 }} className='flex justify-start mr-10'>
    <Image src="/assets/images/user-circle-svgrepo-com.svg"
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'/>
        <MessageUI
          backgroundColor='bg-gray-300'
          content='I Need the project to be done by 9th of August , would it be possible?'
          textColor='text-black'
          alignRight={false}
        />
      
    </motion.div>
    <motion.div className='flex justify-end ml-10'    
        animate={animation}
        transition={{ duration: 0.8 ,delay:2}}>
      
        <MessageUI
          backgroundColor='bg-blue-400'
          content='Of course ! As you please. '
          textColor='text-white'
          alignRight={true}
        />
       <Image src="/assets/images/user-circle-svgrepo-com.svg"
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'/>
    </motion.div>
    <motion.div    
        animate={animation}
        transition={{ duration: 0.8 , delay:3 }} className='flex justify-start mr-10'>
    <Image src="/assets/images/user-circle-svgrepo-com.svg"
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'/>
        <MessageUI
          backgroundColor='bg-gray-300'
          content='Deal , I will be planning the project specifications and deadlines. '
          textColor='text-black'
          alignRight={false}
        />
      
    </motion.div> 
    <motion.div  
        animate={animation}
        transition={{ duration: 0.8 , delay:3.8 }} className='flex justify-center mt-8'>
      <textarea
        className='w-full p-2  border border-gray-200 bg-gray-200 rounded-xl h-12 resize-none'
        placeholder='Click on the more button for planning ---> '
        readOnly
      ></textarea>
  <button>
      <motion.img 
       onClick={handleButtonClick}
       whileHover={{ scale: 1.2 }}src="/assets/images/addIcon.svg"
                width={37}
                height={37}
                className='rounded-full ml-2'
                alt='profile'/>
         </button>       
    </motion.div>
    {showDiv && (
    <motion.div className='flex justify-center mt-8 '>
          <motion.button whileHover={{ scale: 1.2 }} className='orange_btn mr-8'>
            Plan Project
          </motion.button>
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="/assets/images/InsertImage.svg"
            width={37}
            height={37}
            className='rounded-full ml-2 mr-2'
            alt='profile'
          />
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="/assets/images/InsertVideo.svg"
            width={37}
            height={37}
            className='rounded-full ml-2 mr-2'
            alt='profile'
          />
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="/assets/images/InsertFile.svg"
            width={37}
            height={37}
            className='rounded-full ml-2 mr-2'
            alt='profile'
          />
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="/assets/images/InsertVocal.svg"
            width={37}
            height={37}
            className='rounded-full ml-2'
            alt='profile'
          />
        </motion.div>
      )}
  </div>
</div>

      {/* Right Div */}
      <div className='order-2 ml-8 pt-8'>
    
      <div className='flex align-baseline items-center ' id='title'>
          <ToggleButton>
         <ChatBubbleOutlineIcon/>
          </ToggleButton>
          <h1 className=' text-gray-800 text-2xl font-semibold  ml-5'>LIVE TIME CHAT</h1>
        </div>
        <p className='text-gray-500 text-lg mt-5'>
        PITCHINI offers a real-time chat services , to proceed to deal with the second part of the projects , group chats are also available for 
        team projects.
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
        <div className='flex align-baseline  items-center mt-8' id='title'>
            <ToggleButton>
              <DateRangeIcon/>
            </ToggleButton>
            <h1 className='text-gray-800 text-2xl font-semibold ml-5'>CUSTOMIZED DEADLINES</h1>
          </div>
          <p className='text-gray-500 text-lg mt-5'>
           Bring your rules to the table by setting the deadlines for any checkpoints , each checkpoint can have it's own payment , pay as the project evolves.
          </p>
      </div>
    </div>
    </motion.div>
    </>
  )
}

export default Deal