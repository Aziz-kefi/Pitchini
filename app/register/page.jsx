"use client";
import "./style.css"
import Lottie from 'lottie-react'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import TextField from '@mui/material/TextField';
import Linkk from '@mui/material/Link';
import Link from "next/link";
import Typography from '@mui/material/Typography';
import StepperControls from "@components/StepperControls";
import Stepper from "@components/Stepper";
import ProfileCV from "@components/ProfileCV";
import PaymentForm from "@components/PaymentHolder";



function Register() {
  const [currentStep,setCurrentStep]= useState(1)
  const steps=[
    "Account Information",
    "Personal Details",
    "Complete"
    
  ];
  const displayStepFreelancer=(step)=>{
    switch(step){
      case 1:return <FreelancerLoginForm />
      case 2:return <ProfileCV/>
      case 3:return <PaymentForm/>
  }
}
const displayStepRec=(step)=>{
  switch(step){
    case 1:return <RecruiterLoginForm />
}
}
  function Copyright(props) {
    return (
      <Typography  color="text.secondary" align="center" {...props}>
        {'By Joining you agree to our  '}
        <Linkk color="inherit" href="/">
          Terms of Services 
        </Linkk>{' and '}
        <Linkk color="inherit" href="/">
          Policies
        </Linkk>
        {'.'}
      </Typography>
    );
  }
  const [selectedDiv, setSelectedDiv] = useState(""); // Initially, no div is selected
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDivSelection = (divName) => {
    setSelectedDiv((prevSelectedDiv) =>
      prevSelectedDiv === divName ? "" : divName
    );
  };

  const FreelancerLoginForm = () => (
  <>
   <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex-center   flex-col"
      >
   <p className="desc text-center mt-2">Tell us your first and last name and let us know more ! </p>
   <TextField
              margin="normal"
              required
             className=" w-full md:w-3/5 lg:2/5 "
              id="name"
              label="First Name"
              name="name"
              autoComplete="My name"
              autoFocus
            />
             <TextField
              margin="normal"
              required
             className=" w-full md:w-3/5 lg:2/5 "
              id="Lname"
              label="Last Name"
              name="Lname"
              autoComplete="My name"
              autoFocus
            />
          
            <StepperControls/>
           
               
   
   </motion.section>
   <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-2/3  flex-col"
      >
   
             <Stepper steps={steps} currentStep={currentStep}></Stepper>
             <Copyright  />
             </motion.section>
   </>
  );

  const RecruiterLoginForm = () => (
   <>
    <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex-center  flex-col"
      >
   <p className="desc text-center mt-2">Tell us your name let's finish joining ! </p>
   <TextField
              margin="normal"
              required
             className="w-full md:w-3/5 lg:2/5 "
              id="name"
              label="Full Name"
              name="name"
              autoComplete="My name"
              autoFocus
            />
         
         <StepperControls/>

 
   </motion.section>
   <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-2/3  flex-col"
      >
   
             <Stepper steps={steps} currentStep={currentStep}></Stepper>
             <Copyright  />
             </motion.section>
   </>

  );
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex-center mt-16  flex-col"
      >
        <h1 className="small_head_text text-center text-3xl m-2">
          Create your PITCHINI Account
        </h1>
        <p className="desc text-center">
          Are you using PITCHINI as a Recruiter or a Freelancer?
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full flex-center mt-4 flex-col"
      >
         <div
          onClick={() => handleDivSelection("recruiter")}
          className={`${
            selectedDiv === "recruiter"
              ? "border-blue-500 bg-blue-200"
              : "border-gray-300 bg-gray-100 bg-opacity-30"
          } w-full md:w-3/5 lg:2/5  border rounded-md mt-2 pl-4 p-2 cursor-pointer flex items-center justify-between`}
        >
          <div className="text-left">
            <p className="text-black mb-1"> Recruiter</p>
            <p className="text-gray-600">I'm willing to bring my projects to life.</p>
          </div>
          <div
            className={`checkbox ${
              selectedDiv === "recruiter" ? "checked" : ""
            }`}
          />
        </div>
        <div
          onClick={() => handleDivSelection("freelancer")}
          className={`${
            selectedDiv === "freelancer"
              ? "border-blue-500 bg-blue-200"
              : "border-gray-300 bg-gray-100 bg-opacity-30"
          } w-full md:w-3/5 lg:2/5  border rounded-md mt-2 pl-4 p-2 cursor-pointer flex items-center justify-between`}
        >
          <div className="text-left">
            <p className="text-black mb-1"> Freelancer</p>
            <p className="text-gray-600">I'm willing to find work.  </p>
          </div>
          <div
            className={`checkbox ${
              selectedDiv === "freelancer" ? "checked" : ""
            }`}
          />
        </div>
      </motion.section>
      {selectedDiv === "freelancer" && <FreelancerLoginForm />}
      {selectedDiv === "recruiter" && <RecruiterLoginForm />}
    </>
  );
}

export default Register;