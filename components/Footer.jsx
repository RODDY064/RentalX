"use client";


import { footerList } from '@libs/database';
import { motion } from 'framer-motion'
import Link from 'next/link';

export default function Footer() {
  return (
    <>
  <div className='w-full flex items-center justify-center'>
  <div className='w-[99%] min-h-[450px] rounded-tr-2xl rounded-tl-2xl bg-black mr-3 max-sm:mx-1 max-sm:w[99%] text-white'>
     <div className='flex mt-14 p-7 ml-10  max-sm:ml-auto gap-12 flex-wrap  max-sm:flex-col max-sm:items-center max-sm:gap-4 max-sm:text-center'>
      {
        footerList.map((item)=>(
        <div key={item.id}>
        <motion.h1 
        whileHover={{scale:1.2}}
        className='text-[1rem] font-medium font-ubuntu_m cursor-pointer '><span className='bg-gradient-to-r from-fuchsia-400 to-lime-400 bg-clip-text text-transparent'>{item.topic}</span></motion.h1>
        <div className='flex flex-col   my-6 ml-3 text-start max-sm:text-center'>
            {item.path.map((list,index)=>(
                <motion.div 
                 whileHover={{opacity:1}}
                key={`${item.id}_${index}`}  className=' text-white opacity-70'>
                <Link href={list.link} className='cursor-pointer'>{list.name}</Link>
                </motion.div>
            ))}
        </div>
      </div>
        ))
      }
      <div className='text-start'>
        <h1 className='font-ubuntu_m my-2 left'>NewsLetter</h1>
       <div className='flex gap-2 justify-center'>
       <input type='email' className='bg-cream rounded-md w-[18rem] p-2 focus:outline-none h-9 text-black/80
        focus:border-2  border-lime-400/70 max-sm:w-[70%]'></input>
        <div className='w-16 rounded-md h-9 bg-black border border-lime-400/70  flex justify-center items-center cursor-pointer'>
            <span className='bg-gradient-to-r from-fuchsia-400 to-lime-400 bg-clip-text text-transparent'>Submit</span></div>
       </div>
      </div>
     </div>
     <div className='w-full flex  flex-col items-center'>
        <span className='w-[90%] my-4 h-[0.1rem] bg-white/70'></span>
        <div className='w-[90%] flex items-baseline justify-between py-4'>
            <h1 className='font-ubuntu_m text-2xl font-bold title'>RentalX.</h1>
            <div className='flex gap-4 max-sm:gap-3'>
             <div className='w-12 h-12 rounded-full bg-white shadow-lg cursor-pointer flex items-center justify-center' >
              <img src="/assets/icons/facebook.svg" alt="facebook" />
             </div>
             <div className='w-12 h-12 rounded-full bg-white shadow-lg cursor-pointer flex items-center justify-center '>
             <img src="/assets/icons/instagram.svg" alt="instagram" />
             </div>
             <div className='w-12 h-12 rounded-full bg-white shadow-lg cursor-pointer flex items-center justify-center'>
             <img src="/assets/icons/linkedin.svg" alt="linkedin" />
             </div>
            </div>
        </div>
     </div>
    </div>
  </div>
    </>
  )
}
