
"use client"
import ProfileCV from '@components/ProfileCV'

import React, { useRef, useState } from "react";

import { useUserContext } from '../../context/UserContext';

function Freelancer() {
  const { userName } = useUserContext();


 
  return (
    <>
       <section
       
        className="w-full flex-center mt-16  flex-col"
      >
        <h1 className="small_head_text text-center text-3xl m-2">
        Welcome {userName}!  Few steps before joining the team.
        </h1>
        <p className="desc text-center">
         Fill the fields to create your Curriculum Vitae
        </p>
      </section>
    
         <ProfileCV />


   </>
  )
}

export default Freelancer