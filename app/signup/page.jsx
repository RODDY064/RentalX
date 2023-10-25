'use client'



import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'



function Signup() {


  const router = useRouter()

  const [user , setUser]= useState({
    email:'',
    password:'',
    input:false
  })
  

  const register = async(e)=>{
    e.preventDefault()
     
    try {
      
      if(!user.email || !user.password){
        setUser((value)=>({
          ...value,
          input:true
        }))

        return
      }

      const res = await fetch('/api/register',{
        method:'POST',
        body:JSON.stringify(user)
      })

      if(res.ok){
       toast.success('Register Successfully!')
       router.push('/signin')
      }
      if(res.status === 400){
        toast.error('Email already exits!')
      }

      if(res.status === 500){
        toast.error('Something went wrong, Please try again!')
      }

    } catch (error) {
      console.log(error)
      throw new Error('Fail to Register')
    }

  }



  return (
    <>
     <div className="w-full pb-20">
       <div className="w-full pb-5 flex flex-col items-center">
       <div className="mt-10 w-[70%] bg-home flex  shadow-lg border border-teal-200 min-h-[500px] max-sm:min-h-[500px] max-sm:w-[90%] rounded-lg overflow-hidden">
          <div className="w-[50%] min-h-[500px] relative flex items-center justify-center max-sm:hidden over-hidden">
          <Image src="/assets/images/page.jpg" fill={true} priority={true}  alt='page' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
           </div>
           <div className="w-[50%] min-h-[500px] max-sm:w-full">
             <form className="w-full h-full p-10 flex flex-col items-center max-sm:px-4" onSubmit={register}>
              <h1 className="font-ubuntu_m font-medium text-3xl">Create an account</h1>
              <h3 className="my-2 text-black/60 text-xs">with</h3>
               <div className="w-full px-4 flex justify-between mt-2">
               <div className="w-[48%] h-12 p-2 rounded-lg  flex  gap-2 items-center justify-center cursor-pointer bg-black text-white font-ubuntu_m">
                    <Image src='/assets/icons/google.svg' width={22} height={22} alt='google'/>
                  Google
                </div>
                <div className="w-[48%] h-12 p-2 rounded-lg  flex  gap-2 items-center justify-center cursor-pointer bg-black text-white font-ubuntu_m">
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
                 <h1>Email</h1>
                 <input className={`w-full info_input ${user.input && !user.email ? 'border border-rose-500':'border-teal-200'}   invalid:border`}   type='email'
                 placeholder={`${user.input && !user.email ? 'Email field cannot be empty': 'Enter your email'}`}
                 
                 value={user.email}
                 onChange={(e)=>{e.preventDefault(),
                 setUser((value)=>({
                  ...value,
                  email:e.target.value
                 }))}}></input>

                 <h1 className="mt-2">Password</h1>
                  <input 
                  className={`w-full info_input ${user.input && !user.password ? 'border border-rose-500':'border-teal-200'}   invalid:border`} 

                  type='password'
                  placeholder={`${user.input && !user.password ? 'Password field cannot be empty': 'Enter your password'}`}

                  value={user.password}
                  onChange={(e)=>{e.preventDefault(),
                  setUser((value)=>({
                   ...value,
                   password:e.target.value
                  }))}}
                  ></input>
                  <button  type='submit' className="my-4 w-full h-12 rounded-lg bg-black flex items-center justify-center cursor-pointer">
                    <span className="font-ubuntu_m text-xl font-medium title">Submit</span>
                  </button>
                  <div className="w-full flex justify-center gap-2 text-sm text-blue-500">
                    <motion.h3 
                    whileHover={{
                     scale:1.05
                    }}
                    className="cursor-pointer">Already have an account?</motion.h3>
                    <motion.h3 
                     whileHover={{
                      scale:1.05
                     }}
                    className="cursor-pointer">
                      <Link href='/signin'>Sign in</Link></motion.h3>
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

export default Signup