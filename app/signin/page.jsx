'use client'

import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { signIn} from 'next-auth/react'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function page() {
   
  const router = useRouter()

  const [user , setUser]= useState({
    email:'',
    password:'',
  })
   
  
  const loginUser = async (e) => {
    e.preventDefault();

    try {
        const response = await signIn("credentials", {
            username: user.email,
            password: user.password,
            redirect: false,
        });

        if (response.ok) {
          toast.success('Logged in successfully!');
            router.push("/");
        } 
         
        if(response.status === 401){
          toast.error('Something went wrong. Please try again.'); 
          return;
        }

        if(response.error) {
          toast.error('Invalid username or password. Please try again.');
        }
    } catch (error) {
        console.error('Error signing in:', error);
    }
}



  return (
    <>
    <div className="w-full pb-20 ">
       <div className="w-full pb-5 flex flex-col items-center ">
        <div className="mt-10 w-[70%] bg-home flex  shadow-lg border border-teal-200 min-h-[500px] max-sm:min-h-[500px] max-sm:w-[90%] rounded-lg overflow-hidden">
           <div className="w-[50%] relative  min-h-[500px] flex items-center justify-center max-sm:hidden overflow-hidden">
             <Image src="/assets/images/page.jpg" fill={true} priority={true}  alt='page' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
           </div>
           <div className="w-[50%] min-h-[500px] max-sm:w-full">
             <form className="w-full h-full p-10 flex flex-col items-center max-sm:px-4" onSubmit={loginUser}>
              <h1 className="font-ubuntu_m font-medium text-3xl">Sign in</h1>
              <h3 className="my-2 text-black/60 text-xs">with</h3>
               <div className="w-full px-4 flex justify-between mt-2">
               <div className="w-[48%] h-12 p-2 rounded-lg  flex  gap-2 items-center justify-center cursor-pointer bg-black text-white font-ubuntu_m" onClick={()=>{e.preventDefault(),signIn("google",{callbackUrl:'/'})}}>
                    <Image src='/assets/icons/google.svg' width={22} height={22} alt='google'/>
                  Google
                </div>
                <div className="w-[48%] h-12 p-2 rounded-lg  flex  gap-2 items-center justify-center cursor-pointer bg-black text-white font-ubuntu_m" onClick={()=>{e.preventDefault(),signIn("github",{callbackUrl:'/'})}}>
                    <Image src='/assets/icons/github.svg' width={30} height={30} alt='github'/>
                  Github
                </div>
               </div>
               <div className="w-full flex px-4 justify-between items-center my-4">
                <div className="w-[45%] h-[1px] bg-black/70 rounded-lg"></div>
                <h3>or</h3>
                <div className="w-[45%] h-[1px] bg-black/70 rounded-lg"></div>
               </div>
               <div className="px-4 w-full ">
                 <h1>Username</h1>
                 <input className="w-full info_input border-teal-200 invalid:border " type='email'
                 placeholder='Enter your username' required value={user.email}  onChange={(e)=>setUser({...user,email:e.target.value})}></input>

                 <h1 className="mt-2">Password</h1>
                  <input className="w-full info_input  border-teal-200 invalid:border " type='password'
                  placeholder='Enter your password' value={user.password} required onChange={(e)=>setUser({...user,password:e.target.value})}></input>
                  <button className="my-4 w-full h-12 rounded-lg bg-black flex items-center justify-center cursor-pointer"
                  type='submit' >
                    <span className="font-ubuntu_m text-xl font-medium title">Submit</span>
                  </button>
                  <div className="w-full flex justify-center gap-2 text-sm text-blue-500">
                    <motion.h3 
                    whileHover={{
                     scale:1.05
                    }}
                    className="cursor-pointer">Don't have an account?</motion.h3>
                    <motion.h3 
                     whileHover={{
                      scale:1.05
                     }}
                    className="cursor-pointer">
                      <Link href='/signup'>Sign up</Link></motion.h3>
                  </div>
               </div>
               <h1 className="text-sm text-black/40 mt-2">powered by rentalx</h1>
             </form>
           </div>
        </div>
       </div>

    </div>
    </>
  )
}
