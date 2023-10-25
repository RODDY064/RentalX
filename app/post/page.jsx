'use client'

import { motion } from "framer-motion"



export default function Post() {
    const handleData = async()=>{
        try {
            const req = await fetch('api/post',{
                method:'POST'
            })
            if(req.ok){
                console.log('it worked')
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    
    <div className='w-full min-h-screen flex flex-col items-center'>
        <div className='w-[10rem] h-14 bg-white rounded-lg shadow-lg border border-gray-200 flex justify-center  items-center cursor-pointer' onClick={handleData}>
            POST
        </div>
    
    </div>
  )
}
