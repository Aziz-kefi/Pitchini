import React from "react";

const StepperControls=()=>{
return (
    <>
    <div className=" container flex justify-around mt-8 mb-4">
<button className="back_btn uppercase py-2 px-4 rounded-md font-semibold cursor-pointer  transition duration-200 ease-in-out">
Back
</button>
<button className="white_btn uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2  transition duration-200 ease-in-out">
Next
</button>
    </div>
    </>
)
}
export default StepperControls