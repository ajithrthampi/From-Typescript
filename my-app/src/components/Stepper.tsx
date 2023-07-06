import React from 'react'




const Stepper = () => {

    const displaySteps = (
        <div className='w-full flex items-center'>
            <div className='relative flex flex-col items-center text-teal-600'>
                <div className='rounded-full transition duration-500 ease-in-out border-2 border-gray-300
                     h-8 w-8  flex items-center justify-center py-3'
                >
                    {/* Display numbers */}1
                </div>
                <div className='absolute -top-7 text-center mt-16 w-32 text-[11px] font-medium uppercase'>
                    {/* Display  descriptions */}
                    Descriptions
                </div>
            </div>
            <div className='flex-auto border-t-2 transition duration-500 ease-in-out'>
                {/* Display line */}
            </div>
        </div>
    )

    return (
        <div className='mx-4 p-4 flex justify-between items-center'>
            {displaySteps}
        </div>
    )
}

export default Stepper