import React from 'react'

export default function Confirmation( { paymentData,handlePayment}) {
  return (
    <>
    <div className='p-5 w-[90%] max-sm:w-full'>
    <h1 className='font-ubuntu_m font-bold text-[1.3rem] '>Review</h1>
     <div className='w-full my-10 flex flex-col items-center max-sm:my-0'>
      <div className='w-full  flex gap-4 max-sm:flex-col   items-center'>
        <div className='w-[50%] max-sm:w-[100%]  p-2 pb-4 rounded-lg border-teal-200 border '>
          <h1>Personal Information</h1>
          <div className='text-black/60 my-2 text-sm'>
            <h1>Name: {paymentData.name}</h1>
            <h1>Date of Birth: {paymentData.birthDate}</h1>
            <h1>Age:  {paymentData.age}</h1>
          </div>

        </div>
        <div className='w-[50%] max-sm:w-[100%]  p-2 pb-4 rounded-lg border-teal-200 border '>
          <h1>Address</h1>
          <div className='text-black/60 my-2 text-sm'>
            <h1>Street: {paymentData.street}</h1>
            <h1>City: {paymentData.city}</h1>
            <h1>Post Code:  {paymentData.postCode}</h1>
          </div>

        </div>
      </div>
      <div className='w-full my-4 p-2 pb-5 rounded-lg border border-teal-200 text-black/60'>
        <h1>Transaction method: { paymentData.method }</h1>
        {(paymentData.method === 'card') ?
        (<>
        <h1>CardHolder Name: {paymentData.cardHolder}</h1>
        <h1>Card Number: {paymentData.cardNumber}</h1>
        <h1>Expiry Date: {paymentData.expirationDate}</h1>
        <h1>CVV: xxxx</h1>
        </>):
        (<>
        <h1>Paypal Email: {paymentData.paypalEmail}</h1>
        <h1>Password: xxxxxxxx</h1>
        </>)
        }
      </div>
      <div className='w-full p-4 mt-10 max-sm:mt-2 bg-black h-12 rounded-lg cursor-pointer flex justify-center items-center'
      onClick={(e)=>handlePayment(e)}>
         <h1 className="title font-ubuntu_m font-medium text-lg" >Confirm Payment</h1>
      </div>
     </div>
    </div>
    </>
  )
}
