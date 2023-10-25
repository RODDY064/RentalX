'use client'


import { useState, useEffect } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { motion ,AnimatePresence } from 'framer-motion'
import { nav_pop } from "@motion/motions"
import {signIn ,signOut , useSession} from 'next-auth/react'






export default function Nav() {

    const { data: session} = useSession();
    const [isHidden, setIsHidden] = useState(true);
    const [isLog, setIsLog] = useState(false);
    const [isSmallDevice , setIsSmallDevice] = useState()
   
    useEffect(() => {
      const isSmallDevice = window.innerWidth < 768;
      setIsSmallDevice(isSmallDevice);
      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);
   
     const handleResize = () => {
      const isSmallDevice = window.innerWidth < 768;
      setIsSmallDevice(isSmallDevice);
      };


  useEffect(() => {
      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
    }, []);





   const toggle = () => {
    setIsHidden(!isHidden);
   };

  return (
   <>
    <div className="flex  px-4 pt-4 pb-[3rem] justify-between max-sm:px-3 z-[1] max-sm:pb-[2.2rem]">
        <h1 className="font-ubuntu_m font-medium text-2xl">RentalX.</h1>

         {/* desktop navigation */}

        {session?.user ? 
        (
        <>
        <div className="flex gap-4 max-sm:hidden">
        <Link href="/"><p className='cursor-pointer hover:underline  decoration-line decoration-2 underline-offset-6'>Home</p></Link>
        <Link href="/rent"><p className='cursor-pointer hover:underline  decoration-line decoration-2 underline-offset-6'>Rent</p></Link>
        <Link href="/contact"><p className='cursor-pointer hover:underline  decoration-line decoration-2 underline-offset-6'>Contact</p></Link>
        <Link href="/about"><p className='cursor-pointer hover:underline  decoration-line decoration-2 underline-offset-6'>About Us</p></Link>
        </div>
       <div className="flex gap-3 md:gap-5'">
          <button className="outline_btn max-sm:hidden" onClick={signOut}><span className="bg-gradient-to-r from-fuchsia-400 to-lime-400 bg-clip-text text-transparent text-[1rem]">Sign Out</span></button>
          <Link href={`${isSmallDevice ? '':'/user'}`}  onClick={toggle}>
            <Image src={session?.user.image || `/assets/images/profile.svg`} priority={true} width={37} height={37}
            className="rounded-full border border-gray-200 shadow-md" alt="profile"/>
          </Link>
         <AnimatePresence>
            {isHidden && (
                <motion.div 
                variants={isSmallDevice ? nav_pop : ''}
                initial="hidden"
                animate="visible"
                exit='hidden'
                className="absolute right-2 home w-[12rem] h-[15rem] rounded-md shadow-lg sm:hidden ">
                <div className="p-2 cursor-pointer object-fit" onClick={toggle}><img src="/assets/icons/x.svg"  alt="x" /></div>
                <div className="flex flex-col gap-2 items-center font-ubuntu_l font-medium">
                  <Link href='/user'>Account</Link>
                  <Link href='/'>Home</Link>
                  <Link href='/rent'>Rent</Link>
                  <Link href='/about '>About Us</Link>
                  <button className="outline_btn" onClick={signOut}><span className="bg-gradient-to-r from-fuchsia-400 to-lime-400 bg-clip-text text-transparent text-[1rem]">Sign Out</span></button>
                  

                </div>
                </motion.div>
            )
            }
         </AnimatePresence>
      
        </div>
        </>
        ):
        (<>
         <div className="flex gap-3 md:gap-5'">
          <button className="outline_btn" onClick={signIn}><span className="bg-gradient-to-r from-fuchsia-400 to-lime-400 bg-clip-text text-transparent text-[1rem]">Sign In</span></button>
          
        </div>
        </>)}
    </div>
   </>
  )
}
