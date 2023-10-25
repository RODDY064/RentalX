'use client'

import { useState } from "react"
import toast from "react-hot-toast"

export default function Info({ paymentData , setPaymentData , setIsAnimating, handleSlide}) {

  const [inputEmpty , setInputEmpty] = useState(false) 

  const handleSubmit = (e)=>{
   e.preventDefault()

   if(!paymentData.name || !paymentData.age || !paymentData.street || !paymentData.birthDate || !paymentData.postCode ||!paymentData.city ){

    setInputEmpty(true)
    return;
   }
    
   const userAge = calculateAge(paymentData.birthDate)

   if(userAge < 18){
     toast.error('You must be 18 years and above');
     return;
   }
   
   if(userAge.toString() !== paymentData.age){
    toast.error('You age and your date of birth does not match');
    return;
   }
   
   setIsAnimating((prevValue)=>({
    ...prevValue,
     first:!prevValue.first,
     second:!prevValue.second,

   }))
  }
  return (
    <>
    <div className="p-5 w-[80%] max-sm:w-full">
       <h1 className="font-ubuntu_m font-bold text-[1.3rem]">Personal Information</h1>
       <div className="mt-8 w-full">
          <div className="w-full flex flex-col my-4">
           <h1>Name</h1>
           <input className={`w-full max-sm:w-[97%]  h-12 info_input  ${inputEmpty && !paymentData.name ? 'border border-rose-500' :'border-teal-200'}`}

            placeholder={` ${inputEmpty && !paymentData.name ? 'Name field cannot be empty': 'Enter your name' }`}
           type="text"  value={paymentData.name} onChange={(e)=>setPaymentData((prevValue)=>({
            ...prevValue,
             name:e.target.value
           }))}></input>
          </div>

        <div className="w-full max-sm:w-[96%] gap-2  flex justify-between my-4">
          <div className="w-[48%]">
           <h1>Age</h1>
            <input className={`w-full max-sm:w-[97%] invalid:border  h-12 info_input  ${inputEmpty && !paymentData.age ? 'border border-rose-500' :'border-teal-200'}`}
            type='number' min='18' 
             placeholder={` ${inputEmpty && !paymentData.age ? 'Age field cannot be empty': 'Enter your age' }`}
            value={paymentData.age}
            onChange={(e)=>setPaymentData((prevValue)=>({
              ...prevValue,
               age:e.target.value
             }))}

            ></input>
          </div>
          <div className="w-[48%]">
            <h1>Date of birth</h1>
            <input className="w-full max-sm:w-[95%]  h-12 info_input" type="date" 
            value={paymentData.birthDate}
            onChange={(e)=>setPaymentData((prevValue)=>({
              ...prevValue,
               birthDate:e.target.value
             }))}

            ></input>
          </div>
        </div>
          <h1 className="font-ubuntu_m font-bold text-[1.3rem]">Address</h1>
           
          <div className="w-full max-sm:w-[96%]  gap-2 flex justify-between my-4">
          <div className="w-[48%]">
           <h1>Street</h1>
            <input className={`w-full max-sm:w-[97%]  h-12 info_input  ${inputEmpty && !paymentData.street ? 'border border-rose-500' :'border-teal-200'}`}
            type='text' 
             placeholder={` ${inputEmpty && !paymentData.street ? 'Street field cannot be empty': 'Enter your street' }`}
            value={paymentData.street}
            onChange={(e)=>setPaymentData((prevValue)=>({
              ...prevValue,
               street:e.target.value
             }))}

             ></input>
          </div>
          <div className="w-[48%]">
            <h1>City</h1>
            <input className={`w-full max-sm:w-[97%]  h-12 info_input  ${inputEmpty && !paymentData.city ? 'border border-rose-500' :'border-teal-200'}`} type="text"
             placeholder={` ${inputEmpty && !paymentData.city ? 'City field cannot be empty': 'Enter your city' }`}
             value={paymentData.city}
             onChange={(e)=>setPaymentData((prevValue)=>({
               ...prevValue,
                city:e.target.value
              }))} ></input>
          </div>
        </div>
        <div className="flex flex-col my-4">
           <h1>Post Code</h1>
           <input className={`w-full max-sm:w-[97%]  h-12 info_input  ${inputEmpty && !paymentData.postCode ? 'border border-rose-500' :'border-teal-200'}`}

           type="text"  
           placeholder={` ${inputEmpty && !paymentData.postCode ? 'Post code field cannot be empty': 'Enter your post code' }`}
           value={paymentData.postCode}
           onChange={(e)=>setPaymentData((prevValue)=>({
             ...prevValue,
              postCode:e.target.value
            }))}

            ></input>
        </div>
       </div>
       <div className="w-full max-sm:w-[95%] h-12 bg-black flex justify-center rounded-lg items-center my-10 cursor-pointer" onClick={(e)=>handleSubmit(e)}>
          <h1 className="title font-ubuntu_m font-medium text-lg" >Submit</h1>
        </div>
    </div>
    </>
  )
}


function calculateAge(birthDate) {
  const birthDateObj = new Date(birthDate); // Convert birthDate to a Date object
  const currentDate = new Date(); // Get the current date

  // Calculate the user's age
let age = currentDate.getFullYear() - birthDateObj.getFullYear();

  // Check if the user's birthday has occurred this year
  if (
    currentDate.getMonth() < birthDateObj.getMonth() ||
    (currentDate.getMonth() === birthDateObj.getMonth() &&
      currentDate.getDate() < birthDateObj.getDate())
  ) {
    age--; // Subtract 1 year if the birthday hasn't occurred yet
  }

  return age;
}