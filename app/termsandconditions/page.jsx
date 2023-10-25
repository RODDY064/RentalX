import { termsAndConditions } from '@libs/database'
import React from 'react'

export default function Terms() {
  return (
   <>
   <div className='w-full p-5  min-h-screen max-sm:p-1'>
   <h1 className="max-sm:text-center font-ubuntu_m font-medium   text-4xl">Terms  & <br/> <span className='ml-14'>Condition</span></h1>
    <div className='mt-10 w-full p-4 flex items-center justify-center'>
     <div className=' w-[70%] max-sm:w-full flex flex-col gap-4 rounded-lg shadow-md bg-white p-4 border border-teal-400'>
       {termsAndConditions.map((item,index)=>(
         <div key={index} className='my-2'>
           <h1 className='font-ubuntu_m'>{item.topic}:</h1>
           <h3 className=''>
            {item.explanation}
           </h3>

          </div>
       ))

       }
     </div>

    </div>

   </div>
   </>
  )
}
