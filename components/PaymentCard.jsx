"use client"
import Image from "next/image"
import { useState } from "react"

export default function PaymentCard({  paymentData , setPaymentData , setIsAnimating, handleSlide }) {

  const [inputEmpty , setInputEmpty] = useState(false)
  const [inputEmpty2 , setInputEmpty2] = useState(false)

  const [payPalMethod , setPayPalMethod] = useState(true)
  
  const handleSubmit = (e,method)=>{
    e.preventDefault()
   
    if(method === 'card'){
      if(!paymentData.cvv || !paymentData.expirationDate || !paymentData.cardNumber){
        setInputEmpty(true)
        return;
      }

    }else{
      if(!paymentData.paypalEmail || !paymentData.paypalPassword){
        setInputEmpty2(true)
        return;
      }
    }
    
    setPaymentData((prevValue)=>({
      ...prevValue,
       method:method
     }))

    setIsAnimating((prevValue)=>({
     ...prevValue,
      second:!prevValue.second,
      third:!prevValue.third,
 
    }))
   }


  return (
    <>
    <div className='p-7 w-[80%] max-sm:w-full  max-sm:px-3'>
     <h1 className='font-ubuntu_m font-bold text-[1.3rem] '>Payment Method</h1>
     <div className='mt-10 flex justify-center items-center gap-4'>
      <div className='w-[100%] bg-pay rounded-lg  p-3 flex justify-center items-center cursor-pointer gap-3' onClick={()=>setPayPalMethod(true)}>
        <Image src='/assets/icons/paypal.svg' width={25} height={25} alt="paypal"/>
        <h1 className='font-ubuntu_m'><span className='text-blue-800'>Pay</span><span className='text-blue-500'>Pal</span></h1>
      </div>
      <div className='w-[100%]  bg-black  rounded-lg  p-3 flex justify-center items-center
      cursor-pointer'onClick={()=>setPayPalMethod(false)}>
        <h1 className='font-ubuntu_m title'>Credit Card</h1>
      </div>
     </div>
     <div className='w-full flex  my-2 gap-2 justify-center items-center px-2 '>
    <div className='w-[80%] h-[1px] bg-black/30 rounded-lg'></div>
    <h1 className='text-black/30'>or</h1>
    <div className='w-[80%] h-[1px] bg-black/30 rounded-lg'></div>
     </div>
     {payPalMethod ? 
     (<>
       <div className='mt-10'>
         <div className="flex flex-col my-4">
           <h1>Paypal Email</h1>
           <input className={`w-full  max-sm:w-[95%] info_input my-1 ${inputEmpty2 && !paymentData.paypalEmail ? 'border border-rose-500':'border-teal-200' }`}
           type="text"
           placeholder={`${inputEmpty2 && !paymentData.paypalEmail ? 'Email field cannot be empty' :'Enter your paypal email`'} `}
           value={paymentData.paypalEmail}
           onChange={(e)=>setPaymentData((prevValue)=>({
            ...prevValue,
             paypalEmail:e.target.value
           }))} 

           ></input>
          </div>

          <div className="flex flex-col my-4">
           <h1>Paypal Password</h1>
           <input className={`w-full  max-sm:w-[95%] info_input my-1 ${inputEmpty2 && !paymentData.paypalPassword ? 'border border-rose-500':'border-teal-200' }`}
           placeholder={`${inputEmpty2 && !paymentData.paypalPassword ? 'Password field cannot be empty' :'Enter your password'}`}

           value={paymentData.paypalPassword}
           onChange={(e)=>setPaymentData((prevValue)=>({
            ...prevValue,
             paypalPassword:e.target.value
           }))} 

           type="password"></input>
          </div>

          <div className="w-full max-sm:w-[95%] h-12 bg-black flex justify-center rounded-lg items-center mt-10 cursor-pointer" onClick={(e)=>handleSubmit(e,'paypal')}>
          <h1 className="title font-ubuntu_m font-medium text-lg" >Submit</h1>
          </div>
      </div>
     </>):
     (<>
       <div className="w-full">
          <div className="w-full  flex flex-col my-4">
           <h1>Card Number</h1>
           <input className={`w-full  max-sm:w-[95%] info_input ${inputEmpty && !paymentData.cardNumber ? 'border border-rose-500':'border-teal-200' }`}
           type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"      
           value={paymentData.cardNumber}  
            onChange={(e)=>setPaymentData((prevValue)=>({
              ...prevValue,
               cardNumber:e.target.value
             }))} 
             
           ></input>
          </div>

        <div className="w-full max-sm:w-[96%] gap-2  flex justify-between my-4">
          <div className="w-[47%]">
           <h1>Expiry Date</h1>
           <input className={`w-full max-sm:w-[95%] h-12 info_input ${inputEmpty && !paymentData.expirationDate ? 'border border-rose-500':'border-teal-200' }`}
              name="credit-expires" min="YYYY-MM" max="YYYY-MM"   placeholder="mm/ yy" type="month"  required
            value={paymentData.expirationDate}  
            onChange={(e)=>setPaymentData((prevValue)=>({
              ...prevValue,
               expirationDate:e.target.value
             }))} 
            />
          </div>
          <div className="w-[47%]">
            <h1>CVV</h1>
            <input className={`w-full max-sm:w-[95%]  h-12 info_input ${inputEmpty && !paymentData.cvv ? 'border border-rose-500':'border-teal-200' }`}  
            maxlength="4" name="credit-cvc" pattern="\d*" placeholder="xxxx" type="tel" 
            value={paymentData.cvv}  
            onChange={(e)=>setPaymentData((prevValue)=>({
              ...prevValue,
               cvv:e.target.value
             }))} 
            
            />
          </div>
        </div>   
        <div className="w-full  flex flex-col my-4">
           <h1>Card holder Name</h1>
           <input className={`w-full  max-sm:w-[95%] info_input  ${inputEmpty && !paymentData.cardHolder ? 'border border-rose-500':'border-teal-200' }`}
           type="text" placeholder="Jane Doe"
           value={paymentData.cardHolder}  
            onChange={(e)=>setPaymentData((prevValue)=>({
              ...prevValue,
               cardHolder:e.target.value
             }))} 
           ></input>
        </div>
        <div className="w-full max-sm:w-[95%] h-12 bg-black flex justify-center rounded-lg items-center mt-10 cursor-pointer"
        onClick={(e)=>handleSubmit(e,'card')}>
          <h1 className="title font-ubuntu_m font-medium text-lg" >Submit</h1>
          </div>
       </div>
     </>)

     }
    </div>
    </>
  )
}
