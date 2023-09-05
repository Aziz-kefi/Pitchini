"use client"
import Lottie from 'lottie-react'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';


function Copyright(props) {
  return (
    <Typography  color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        PITCHINI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.



function Login() {
  
  const [selectedButton, setSelectedButton] = useState(""); // Initially, no button is selected

  const handleButtonSelection = (buttonName) => {
    setSelectedButton(buttonName);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const FreelancerLoginForm = () => (
    <motion.section initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }}  >
  
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'darkorange' }}>
            <EngineeringOutlinedIcon />
          </Avatar>
        
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              className='outline_orange_btn_grey_border'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container className='mt-4'>
              <Grid item xs>
                <Link href="#" variant="body2" className='text-blue-400 underline '>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" className='text-blue-400 underline '>
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  
    </motion.section>
  );

  const RecruiterLoginForm = () => (
    <motion.section initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }}  >
  
      <Container component="main" maxWidth="xs">
       
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'darkorange' }}>
            <HandshakeOutlinedIcon />
          </Avatar>
       
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              className='outline_orange_btn_grey_border'
              sx={{ mt: 3, }}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              className='google_auth'
              sx={{ mt: 3, mb: 2 }}
            >
              This will be our google login
            </Button>
            <Grid container className='mt-4'>
              <Grid item xs>
                <Link href="#" variant="body2" className='text-blue-400 underline '>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" className='text-blue-400 underline '>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  
    </motion.section>
  );


  return (
    <>
      <motion.section initial={{ opacity: 0 , scale:0.5 }} whileInView={{ opacity: 1 , scale:1 }}  transition={{ duration: 0.5 }} className="w-full mt-8 flex-center flex-col  " >
    <h1 className="small_head_text  text-center  m-2">
      Log in to Pitchini</h1>
   <p className="desc text-center mt-2 mb-2">Are you using PITCHINI as a Recruiter or a Freelancer?</p>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex mt-8"
      >
        <button
         style={selectedButton === "freelancer" ? { transform: "scale(1.1)" } : {}}
          onClick={() => handleButtonSelection("freelancer")}
          className={` w-32  py-2 px-4 border-2  rounded-l-lg ${
            selectedButton === "freelancer" ? "bg-blue-100 border-blue-500 text-blue-500" : "bg-gray-100"
          }`}
        >
          Freelancer
        </button>
        <button
         style={selectedButton === "recruiter" ? { transform: "scale(1.1)" } : {}}
          onClick={() => handleButtonSelection("recruiter")}
          className={`w-32 py-2 px-4 border-2  rounded-r-lg ${
            selectedButton === "recruiter" ? "bg-blue-100  border-blue-500 text-blue-500" : "bg-gray-100"
          }`}
        >
          Recruiter
        </button>
      </motion.div>
      {selectedButton === "freelancer" && <FreelancerLoginForm />}
      {selectedButton === "recruiter" && <RecruiterLoginForm />}
    
    </>
  )
}

export default Login