"use client"
import { useState } from "react"
import { motion ,useAnimation} from 'framer-motion'
import { faqs } from "@libs/database";
import { childVariants, itemVariants } from "@motion/motions";

 const Contact = () => {
 
   const [isTogged , setIsTogged] = useState(Array(faqs.length).fill(false))
 

   const toggle =(index)=>{
    const newToggled = [...isTogged]

    newToggled[index]= !isTogged[index]

    for (let i = 0; i < newToggled.length; i++) {
      if (i !== index) {
        newToggled[i] = false;
      }
    }
    
    setIsTogged(newToggled);
   

   }
    
  

  return (
    <>
    <div className="w-full min-h-screen p-5">
        <h1 className="max-sm:text-center font-ubuntu_m font-medium   text-4xl">Contact Us</h1>
        <div className="w-full flex justify-center my-10">
            <div className="w-[90%] max-sm:w-[100%] bg-white rounded-lg border border-teal-200  shadow-lg flex overflow-hidden max-sm:flex-col">
            <div className="w-[39%] max-sm:w-full bg-black p-4 text-white">
             <h1 className="font-medium font-ubuntu_m text-2xl my-4"><span className="text_title">Let's get in touch </span></h1>
             <h3 className="font-ubuntu_m">
            <span className="title">Your Insights, Our Commitment: Together,</span>
             <span className=" bg-gradient-to-r  from-cyan-400 to-green-400 bg-clip-text text-transparent "> Let's Share, Learn, and Grow</span></h3>
            <div className="flex w-full flex-col gap-10 p-2 mt-10">
             <div className=" w-full flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-fuchsia-400  shadow-md rounded-full flex justify-center  items-center">
                  <div className="w-[93%] h-[93%] rounded-full bg-black flex items-center justify-center ">
                     r
                    </div>
                </div>
                 <div className="font-ubuntu_m">
                    <h1><span className="title">Address:</span> <span className="title">198 West 21th</span></h1>
                    <h1><span className="title">Street,</span> <span className="title">Suite 723 New York</span></h1>
                    <h1><span className="title">NY</span> <span className="title">10016</span></h1>
                 </div>
              </div>

              <div className=" w-full flex gap-4 items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-fuchsia-400  shadow-md rounded-full flex justify-center  items-center">
                  <div className="w-[93%] h-[93%] rounded-full bg-black flex items-center justify-center ">
                     r
                    </div>
                </div>
                 <div className="font-ubuntu_m">
                    <h1><span className="title">Phone: </span> <span className="title">+ 1201 8577757</span></h1>
                 </div>
              </div>

              <div className=" w-full flex  gap-4 items-center ">
                <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-fuchsia-400  shadow-md rounded-full flex justify-center  items-center">
                  <div className="w-[93%] h-[93%] rounded-full bg-black flex items-center justify-center ">
                     r
                    </div>
                </div>
                 <div className="font-ubuntu_m">
                    <h1><span className="title">Email: </span></h1>
                    <h1><span className="title">rentalX@icloud.com</span></h1>
                 </div>
              </div>
              <div className=" w-full flex gap-4 items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-fuchsia-400  shadow-md rounded-full flex justify-center  items-center">
                  <div className="w-[93%] h-[93%] rounded-full bg-black flex items-center justify-center ">
                     r
                    </div>
                </div>
                 <div className="font-ubuntu_m">
                    <h1><span className="title">Website:</span> <span className="title">www.rentalX.com</span></h1>
                 </div>
              </div>
             
             </div>
            </div>
            <div className="w-[61%]  max-sm:w-full py-4 px-10 max-sm:px-4">
                <h1 className="my-4 font-ubuntu_m text-xl font-medium">Get In touch</h1>
                <div className="mt-10">
                <h1>Full Name</h1>
                <input className="w-[80%] max-sm:w-full border-teal-200 invalid:border  info_input" type="text"
                placeholder="Name"></input> 

                <h1 className="mt-2" >Email Address</h1>
                <input className="w-[80%] max-sm:w-full border-teal-200 invalid:border  info_input" type="email"
                placeholder="Email"></input>

               <h1 className="mt-2" >Subject</h1>
                <input className="w-[80%] max-sm:w-full border-teal-200 invalid:border  info_input" type="email"
                placeholder="Subject"></input>
                  
                <h1 className="mt-2" >Message</h1>
                <textarea className="w-[80%]  min-h-[150px]  max-h-[150px] max-sm:w-full border-teal-200 invalid:border  info_input" type="email"
                placeholder="Email"></textarea>


                </div>
            </div>
            </div>

        </div>
         <div className="w-full py-12">
         <h1 className="max-sm:text-center font-ubuntu_m font-medium   text-3xl">fAQs</h1>
         <div className="w-full mt-10 flex flex-col gap-2  items-center justify-center ">
       {faqs.map((item,index) => (
        <motion.div 
        variants={itemVariants}
        animate={isTogged[index] ? "open" : "closed"}
        initial={{
         height:'105px'
        }}
        key={item.id} className={`w-[80%] px-4 max-sm:w-full ${isTogged[index] ? 'h-auto ' :'h-[105px]'} gap-2   flex flex-none  flex-col items-center  rounded-lg overflow-hidden`} >


        <div className="w-full flex justify-between  p-4 py-6 bg-white border border-teal-200 rounded-lg cursor-pointer shadow-md" 
        onClick={()=>toggle(index)}>
            {item.question}
                  <motion.div
                   variants={{ open: { rotate: 180 },closed: { rotate: 0 }}}
                   transition={{ duration: 0.2 }}
                   style={{ originY: 0.55 }} >
                   <svg width="15" height="15" viewBox="0 0 20 20">
                     <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                  </motion.div>
          </div>
           <motion.div 
            variants={childVariants}
            initial={{
               opacity:0
            }}
           className={`w-full p-4  mb-4 bg-white border border-teal-200 rounded-lg `} id="answer">  
              {item.answer}
            </motion.div>
        </motion.div>
      ))}
         </div>
         </div>
    </div>
    </>
  )
}

export default Contact