'use client'

import BookingCard from "@components/BookingCard"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"

export default function page() {
const {data:session} = useSession()
const searchParams = useSearchParams()
const id = searchParams.get('data')


const router = useRouter()
const [data , setData] = useState([])
const [price,setPrice] = useState('')
const [rental,setRental] = useState({
  startDate:'',
  endDate:'',
  userId:session?.user.id,
  carId:id,
  totalPrice:''
})


  useEffect(()=>{
   setPrice(data.price)
  },[data])



  const handleData = async()=>{
    try {
        const res = await fetch(`/api/booking/${id}`,{
            method:'GET'
        })

       if(res.ok){
          const body = await res.json()
          setData(body)
       }
    
    } catch (error) {
        console.log(error)
    } 
   }
  
   useEffect(()=>{
    handleData()
   },[])
  
   const handleOrder = async(e)=>{
     e.preventDefault()
     try {
    
       if(!rental.startDate || !rental.endDate ){
        toast.error('Please fill the field')
        return;
       } 

       if(!rental.userId){
        toast.error('Error ocurred while booking,Please try again')
        return;
       }
        
       const numberOfDays = calculateDays(rental.startDate, rental.endDate);
       
        // Check if the startDate is in the past
        if (numberOfDays === -1) {
          toast.error('Invalid booking date: Start date is in the past');
          return;
        } else if (numberOfDays > 7) {
          toast.error('Can not book this model for more than 7 days');
          return;
        } else if (numberOfDays < 0) {
          toast.error('Invalid booking date');
          return;
        }
    
        if (price) {
          if (numberOfDays === 0) {
            const totalAmount = price * 1;
            if (!isNaN(totalAmount)) {
              setRental((prevRental) => ({
                ...prevRental,
                totalPrice: totalAmount,
              }));
            }
          } else {
            const totalAmount = price * numberOfDays;
            if (!isNaN(totalAmount)) {
              setRental((prevRental) => ({
                ...prevRental,
                totalPrice: totalAmount,
              }));
            }
          }
        } else {
          return;
        }
      

       const response = await fetch(`/api/booking/${id}`,{
        method:'POST',
        body:JSON.stringify(rental)
       })
       
       
       if(response.status === 400){
        const data = await response.json();
        if(data.error){
          toast.error(data.error)
        }
       }


       if(response.ok){
        const body = await response.json()
        toast.success('Booked Successfully')
        router.push(`/payment?id=${body.id}`)
       }

     } catch (error) {
      console.log(error)
     }
    
  }

  return (
    <div className="w-full min-h-screen p-4">
     <BookingCard data={data} rental={rental} setRental={setRental}  handleOrder={handleOrder}/>
    </div>
  )
}


export function calculateDays(startDate, endDate) {
  // Parse the start and end dates into Date objects
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

   // Get the current date in the user's local time zone
   const currentDate = new Date();

    currentDate.setHours(0, 0, 0, 0);
   // Compare the start date with the current date
   if (startDateObj < currentDate) {
     return -1; 
   }
 
  // Calculate the time difference in milliseconds
  const timeDifference = endDateObj - startDateObj;

  // Convert milliseconds to days
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  return daysDifference;
}
