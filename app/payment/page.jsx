'use client'



import Animation from '@components/Animation'
import Confirmation from '@components/Confirmation'
import Info from '@components/Info'
import PaymentCard from '@components/PaymentCard'
import { isoDateToNormal } from '@libs/database'
import { show_box } from '@motion/motions'
import {AnimatePresence, motion} from 'framer-motion'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function Payment() {
  const searchParams = useSearchParams()
  const {data: session } = useSession()
  const [apiData, setApiData] = useState([])
  const [addressData, setAddressData]= useState([])
  const router = useRouter()


  const id = searchParams.get('id')

  const [paymentData , setPaymentData] = useState({
    name:'',
    age:'',
    birthDate:'',
    amount:'',
    postCode:'',
    street:'',
    city:'',
    cardNumber:'',
    expirationDate:'',
    cvv:'',
    cardHolder:'',
    licenseNumber :'',
    expirationLicenseDate :'',
    rentalId:'',
    userId:session?.user.id,
    carId:'',
    method:'',
    paypalEmail:'',
    paypalPassword:''
  })

   // get the rental data
   const getData = async()=>{
     try {
      
      const response = await fetch(`api/payment/${id}/${session?.user.id}`,{
        method:'GET'
      })

      if(response.ok){
      const body = await response.json()
     const responseData = body.response
      setApiData(responseData)

      if('address' in body){
        const addressData = body.address
        setAddressData(addressData)
      }
      }

     } catch (error) {
      console.log(error)
      return new Error('Fail to fetch the Data')
     }

   }



   useEffect(()=>{
    getData()
   },[])





   useEffect(()=>{
    setPaymentData((preValue)=>({
      ...preValue,
      name:addressData.name,
      age:addressData.age,
      birthDate:convertISODateToHTMLDate(addressData.birthDate),
      street:addressData.street,
      city:addressData.city,
      postCode:addressData.postalCode
    }))

   },[addressData])





   useEffect(()=>{
      setPaymentData((preValue)=>({
        ...preValue,
        amount:apiData.totalPrice,
        rentalId:apiData.id,
        carId:apiData?.car?.id
      }))


   },[apiData])

  const [isAnimating , setIsAnimating] = useState({
    first:true,
    second:false,
    third:false,
  })


  const handleSlide = ()=>{
    if(isAnimating.first){
      setIsAnimating((preValue)=>({
        ...preValue,
        first:!preValue.first,
        second:!preValue.second
       }))
    }else if(isAnimating.second){
      setIsAnimating((preValue)=>({
        ...preValue,
        second:!preValue.second,
        third:!preValue.third
       }))
    }else {
      setIsAnimating((preValue)=>({
        ...preValue,
        third:!preValue.third,
        first:!preValue.first
       }))
    }

  }

  const handlePrev= ()=>{

   if(isAnimating.third){
    setIsAnimating((preValue)=>({
      ...preValue,
      third:!preValue.third,
      second:!preValue.second
     }))
   }else if(isAnimating.second){
    setIsAnimating((preValue)=>({
      ...preValue,
      second:!preValue.second,
      first:!preValue.third
     }))
   }else{
    return
   }

  }

    const handlePayment = async(e)=>{
      e.preventDefault()

      try {
        const request = await fetch('api/payment',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(paymentData)
        })


        if(request.ok){
          toast.success('You have successfully made your payment')
          router.push('/')
        }
        
      } catch (error) {
        console.log(error)
        return new Error('Fail to send the data')
        
      }
    }

  return (
   <>
   <div className='w-full  flex flex-col items-center pb-[12rem]'>
    <h1 className="font-ubuntu_m text-lg my-4">CHECKOUT</h1>
    <div className='p-4 w-[95%] max-sm:px-3 max-sm:w-[100%] gap-4 h-[820px] max-sm:min-h-screen  flex max-sm:flex-col max-sm:items-center pb-16 '>
    <div className='w-[28%] hidden max-sm:block max-sm:w-full max-sm:h-[200px] h-full rounded-lg bg-white border border-gray-200 shadow-lg pb-5'>

      {/* payment slide dashboard */}

      <div className='flex items-center justify-center p-4'>
        <div className='flex flex-col items-center'>
           <div className={`w-12 h-12 rounded-full ${isAnimating.first ? 'bg-black' : 'bg-white '} border border-teal-200     shadow-md flex justify-center items-center`}>
               <h1 className={`font-ubuntu_m text-lg font-bold  ${isAnimating.first ? 'title' : 'text-black'}`}>1</h1>
           </div>
           <h1 className='text-sm text-black/60'>Information</h1>
        </div>
        <div className='w-10 h-[2px] mx-1 bg-teal-200'></div>
        <div className='flex flex-col items-center'>

            <div className={`w-12 h-12 rounded-full ${isAnimating.second ? 'bg-black' : 'bg-white '} border border-teal-200 shadow-md flex justify-center items-center`}>
            <h1 className={`font-ubuntu_m text-lg font-bold  ${isAnimating.second ? 'title' : 'text-black'}`}>2</h1>
          </div>
          <h1 className='text-sm text-black/60'>Payment</h1>
        </div>

        <div className='w-10 h-[2px] mx-1 bg-teal-200'></div>

        <div className='flex flex-col items-center'>
        <div className={`w-12 h-12 rounded-full ${isAnimating.third ? 'bg-black' : 'bg-white '} border border-teal-200 shadow-md flex justify-center items-center`}>
             <h1 className={`font-ubuntu_m text-lg font-bold  ${isAnimating.third ? 'title' : 'text-black'}`}>3</h1>
        </div>
        <h1 className='text-sm text-black/60'>Review</h1>
        
        </div>

        </div>
       <div className='py-2 px-3 gap-4 flex items-center justify-center'>
        <div className='text-black/60'>
          <h1>{apiData?.car?.model}</h1>
          <h1>${apiData?.car?.price}/ day</h1>

        </div>

        <div className=' w-[1px] h-10 bg-black/30'></div>

        <div className='text-black/60 text-sm'>
          <h1>Start Date: {isoDateToNormal(apiData?.startDate)}</h1>
          <h1>End Date: {isoDateToNormal(apiData?.endDate)}</h1>
        </div>

       </div>
       <div className='w-full flex items-center justify-center p-2'>
        <h1 className='font-ubuntu_m font-medium'>Total Amount: ${apiData.totalPrice}</h1>
       </div>
      </div>

      {/* payment slider animation  */}

     <div className='w-[70%] max-sm:w-full   h-auto flex flex-col items-center
      rounded-lg bg-white border border-gray-200 shadow-lg '>
      <div className="w-[100%] flex items-center justify-between  my-4">
        <div className='ml-6 cursor-pointer' onClick={handlePrev}>
          <Image src='/assets/icons/arrow.svg' width={35} height={35} alt='arrow'/>
        </div>
        <h1 className="text-center">Payment Details</h1>
        <div className="text-black/0"> Next</div>
      </div>
     <AnimatePresence>
      
      <div className="w-full my-4  flex justify-center items-center overflow-hidden  flex-none">
       {
        //first slider
       
       isAnimating.first && (
         <motion.div
            variants={show_box}
            initial='hidden'
             animate='visible'
             exit='hidden'
          className="w-[90%] h-[600px]  my-6 border border-teal-200 bg-white shadow-lg rounded-lg flex flex-col items-center">
           <Info  paymentData={paymentData} setPaymentData={setPaymentData} setIsAnimating={setIsAnimating} handleSlide={handleSlide}/>
         </motion.div>
       )
       }
        {isAnimating.second && (
     
          // second slider

           <motion.div 
          variants={show_box}
           initial='hidden'
           animate='visible'
           exit='hidden'
           className="w-[90%] h-[600px] my-6 border border-teal-200 bg-white shadow-lg rounded-lg flex flex-col items-center">
             <PaymentCard  paymentData={paymentData} setPaymentData={setPaymentData} setIsAnimating={setIsAnimating} handleSlide={handleSlide}/>
           </motion.div>
        )
        } 
        {isAnimating.third && (
     
     // third slider

      <motion.div 
     variants={show_box}
      initial='hidden'
      animate='visible'
      exit='hidden'
      className="w-[90%] h-[600px] my-6 border border-teal-200 bg-white shadow-lg rounded-lg flex flex-col items-center ">
       <Confirmation  paymentData={paymentData} setIsAnimating={setIsAnimating} handlePayment={handlePayment} />
      </motion.div>
   )

        }
       </div>
     </AnimatePresence>
     </div>
       
       {/* payment slide dashboard */}
      
     <div className='w-[28%]  max-sm:hidden h-full rounded-lg bg-white border border-gray-200 shadow-lg'>
        <div className='flex items-center justify-center p-4'>
        <div className='flex flex-col items-center'>
           <div className={`w-12 h-12 rounded-full ${isAnimating.first ? 'bg-black' : 'bg-white '} border border-teal-200     shadow-md flex justify-center items-center`}>
               <h1 className={`font-ubuntu_m text-lg font-bold  ${isAnimating.first ? 'title' : 'text-black'}`}>1</h1>
           </div>
           <h1 className='text-sm text-black/60'>Information</h1>
        </div>
        <div className='w-10 h-[2px] mx-1 bg-teal-200'></div>
        <div className='flex flex-col items-center'>

            <div className={`w-12 h-12 rounded-full ${isAnimating.second ? 'bg-black' : 'bg-white '} border border-teal-200 shadow-md flex justify-center items-center`}>
            <h1 className={`font-ubuntu_m text-lg font-bold  ${isAnimating.second ? 'title' : 'text-black'}`}>2</h1>
          </div>
          <h1 className='text-sm text-black/60'>Payment</h1>
        </div>

        <div className='w-10 h-[2px] mx-1 bg-teal-200'></div>

        <div className='flex flex-col items-center'>
        <div className={`w-12 h-12 rounded-full ${isAnimating.third ? 'bg-black' : 'bg-white '} border border-teal-200 shadow-md flex justify-center items-center`}>
             <h1 className={`font-ubuntu_m text-lg font-bold  ${isAnimating.third ? 'title' : 'text-black'}`}>3</h1>
        </div>
        <h1 className='text-sm text-black/60'>Review</h1>

        </div>

        </div>

        <div className='my-4 w-full flex flex-col items-center'>
          {!apiData.car ?
          (<>
           <div className='flex p-2 gap-2  items-center justify-center w-[120px] h-[120px] '>
            <Animation/>
           </div>
          </>):
          (<>
          <div className='flex p-2 gap-2 justify-center'>
           <Image src={`https://raw.githubusercontent.com/RODDY064/Images/94cfa0e0109a6fe34c3f2e56118998df3c90c3dd/database/${apiData?.car?.cardImage}`}
      width={120} height={120}
          
            alt='card Image'
           className='rounded-lg border border-teal-200 object-cover'/>
           <div className='mt-4'>
            <h1 className='text-black/60'>{apiData?.car?.model}</h1>
            <h1 className='font-ubuntu_m font-medium'>${apiData?.car?.price} / day</h1>
          </div>

          </div>
          </>)
          }

          <div className='w-[80%] h-[2px] bg-black/10 rounded- my-6'></div>

          <div className='w-[80%]'>
            <h1>Start Date: { isoDateToNormal(apiData?.startDate)}</h1>
            <h1>End  Date: { isoDateToNormal(apiData?.endDate)}</h1>
          </div>

          <div className='w-[80%] h-[2px] bg-black/10 rounded- my-6'></div>
          <div className='w-[80%]' >
           <div className='flex justify-between'>
           <h1 className='text-lg font-ubuntu_m font-medium title'>Total Amount</h1>
           <h1 className='text-2xl font-ubuntu_m font-bold'>${apiData.totalPrice}</h1>
           </div>
           <h1 className='text-black/30 mt-4'>
            You will receive a confirmation email.
           </h1>
           <h1 className='text-black/30 '>
            Terms and conditions applied.
           </h1>
          </div>

        </div>
     </div>
    </div>
   </div>
   </>
  )
}


export function convertISODateToHTMLDate(isoDate) {
 // Parse ISO date string into a Date object
 const date = new Date(isoDate);

 // Get year, month, and day
 const year = date.getFullYear();
 const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based, so add 1
 const day = date.getDate().toString().padStart(2, '0');

 // Format as HTML input date format (yyyy-MM-dd)
 const htmlDate = `${year}-${month}-${day}`;

 return htmlDate;
}

