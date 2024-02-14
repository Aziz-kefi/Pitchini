import React from "react";

const StepperControls=({handleClick,currentStep,steps })=>{
return (
    <>
    <div className=" container flex justify-around  mb-12">
<button onClick={()=>handleClick()} className={`back_btn uppercase py-2 px-4 rounded-xl font-semibold   transition duration-200 ease-in-out
${currentStep === 1 ? "opacity-20  cursor-not-allowed ":" hover:bg-gray-400 hover:text-white"}`}
disabled={currentStep === 1}>
    
Back
</button>
<button onClick={()=>handleClick("next")} className="white_btn uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2  transition duration-200 ease-in-out">
{currentStep == steps.length  ? "Confirm" : "Next"}
</button>
    </div>
    </>
)
}
export default StepperControls