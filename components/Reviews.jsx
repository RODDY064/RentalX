import React from 'react'

export default function Reviews() {
  return (
    <>
    <div className='w-full min-h-500 p-4'>
     <h1 className='font-ubuntu_m text-2xl font-medium'>Reviews</h1>
     <div className='my-4 flex flex-wrap gap-10 justify-center '>
      {[1,2,3,4].map((item,index)=>(
        <div key={index}  className='w-[30rem] p-4 bg-white shadow-md rounded-lg border-teal-200 border'
        >
        <div className='flex gap-4'>
         <div className='w-24 h-24 rounded-full bg-white shadow-md border border-gray-200'></div>
         <div className='my-2'>
         <h1>Kofi Boakye</h1>
         <h1 className='text-sm text-black/60'>kofiboakye@gmail.com</h1>
         </div>
        </div>
        <h1 className='mt-4 text-black/75'>
          RentalX is very a good company.They provide sport and luxury car at a very convenient price.
          I love working with them and what makes me happy is about their 24/7 service and support they provide
        </h1>
        </div> 
      ))

      }
     </div>
    </div>
    </>
  )
}
