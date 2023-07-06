import React from 'react'

const StepperButton = () => {
  return (
    <div>
        <div className='flex justify-between px-10'>
            <button className='px-5 bg-blue-300 rounded py-2 font-poppins'>Previous</button>
            <button className='px-5 bg-blue-300 rounded py-2 font-poppins'>Next</button>
        </div>
    </div>
  )
}

export default StepperButton