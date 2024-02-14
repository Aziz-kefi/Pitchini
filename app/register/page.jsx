"use client";
import "./style.css"

import React, { useRef, useState, useContext,useEffect} from "react";
import { motion } from "framer-motion";
import TextField from '@mui/material/TextField';
import Linkk from '@mui/material/Link';


import Typography from '@mui/material/Typography';
import StepperControls from "@components/StepperControls";
import Stepper from "@components/Stepper";
import ProfileCV from "@components/ProfileCV";
import PaymentForm from "@components/PaymentHolder";




function Register() {

  const [currentStep,setCurrentStep]= useState(1)
  
  const steps=[
    "Full Name",
    "Personal Details",
    "Completion"
    
  ];
  const displayStepFreelancer=(step)=>{
    switch(step){
      case 1: return <FreelancerNameForm/>
      case 2:return <ProfileCV/>
      case 3:return <PaymentForm/>
  }
}



const handleClick =(direction) =>{
let newStep = currentStep; 
direction == "next" ? newStep++ : newStep --;
newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
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

  const handleDivSelection = (divName) => {
    setCurrentStep(1);
    setSelectedDiv((prevSelectedDiv) =>
      prevSelectedDiv === divName ? "" : divName
    );
  };
  const FreelancerNameForm = () => {
  
  
    return (
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex-center   flex-col"
      >
        <p className="desc text-center mt-2">Tell us your first and last name and let us know more! </p>
        <TextField
          margin="normal"
          required
          className="w-full md:w-3/5 lg:2/5"
          id="name"
          label="First Name"
          name="firstname"
          autoComplete="My name"
          autoFocus
         
        />
        <TextField
          margin="normal"
          required
          className="w-full md:w-3/5 lg:2/5"
          id="Lname"
          label="Last Name"
          name="lastname"
          autoComplete="My name"
          autoFocus
       
        />
      </motion.section>
    );
  };
  const FreelancerRegisterForm = () => (
    
  <>
 
   <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-2/3  flex-col"
      >

      {displayStepFreelancer(currentStep)}
   
             <Stepper steps={steps} currentStep={currentStep}></Stepper>
             <StepperControls handleClick={handleClick} currentStep={currentStep} steps={steps}/>
             <Copyright  />
             </motion.section>
         
   </>
  );

function RecruiterRegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
  
      ><h1 className="desc text-center my-2"> Last step before joining as a recruiter</h1></motion.section>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-3/5  flex-col"
      >
        <div>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        <div className="flex justify-center mt-4"> {/* Centering the button */}
            <button className="white_btn uppercase py-2 px-4 rounded-xl font-semibold  w-full sm:w-1/2 md:w-1/3 cursor-pointer border-2 transition duration-200 ease-in-out">
              Register
            </button>
          </div>
        </div>

      </motion.section>
    </>
  );
}
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
          >
            {selectedDiv === "recruiter" ? (
              <span className="text-white flex items-center text-sm mb-2 justify-center">&#10003;</span>
            ) : null}
          </div>
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
          >
            {selectedDiv === "freelancer" ? (
              <span className="text-white flex items-center text-sm mb-2 justify-center">&#10003;</span>
            ) : null}
          </div>
        </div>
      </motion.section>
      
      {selectedDiv === "freelancer" && <FreelancerRegisterForm />}
      {selectedDiv === "recruiter" && <RecruiterRegisterForm />}
  
    </>
  );
}

export default Register;