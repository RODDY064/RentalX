'use client'

import { circle,circle_mem } from "@motion/motions"
import { stars } from "@libs/database"
import { motion } from 'framer-motion'
import Image from "next/image"



export default function Animation() {
  return (
   <div className="w-full h-full flex justify-center items-center gap-2">
   <motion.div
        className="border-[4px]  border-x-sky-400  border-b-sky-400 w-4 h-4 rounded-full border-t-transparent my-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
       ></motion.div>
       <h1 className='font-ubuntu_m font-medium text-lg '>loading<span className="animate-pulse">...</span></h1>
   </div> 
  )
}
