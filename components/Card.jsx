"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Card({data}) {
  const router = useRouter()

   const handleBooking = async () =>{
    router.push(`/booking?data=${data.id}`)
   }
  return (
    <>
     <div 
     className='p-3 shadow-lg w-[22rem] h-[495px] bg-white_glass border-2 border-gray-200 rounded-lg 
     max-sm:mx-0 max-sm:p-2 max-sm:relative  max-sm:h-[460px] max-sm:w-[21rem]  flex-none
     '>
      <div className=" relative w-[100%] h-[280px] border border-gray-200 rounded-lg flex items-center justify-center">
        <Image src={`https://raw.githubusercontent.com/RODDY064/Images/94cfa0e0109a6fe34c3f2e56118998df3c90c3dd/database/${data.cardImage}`} 
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         alt="card"  fill={true} className=" p-1 rounded-lg object-contain" />
      </div>
     <div className="flex justify-between my-3">
     <h1 className="font-medium text-lg">{data.model}</h1>
     <div className="w-12 h-6 p-2 border rounded-lg border-teal-400 decoration-slice grid place-content-center place-items-center">{data.year}</div>
     </div>
     <div className="flex justify-between text-black/70 text-sm"> 
     <div className="flex gap-2 flex-col  text-start">
      <h1>{data.seat} Seating</h1>
      <h1>{data.mileage}</h1>
     </div>
     <div className="flex gap-3 flex-col items-center">
      <h1>{data.fuelType}</h1>
      <h1>{data.transmission}</h1>
     </div>
     </div>
     <div className="w-ful h-[1px] bg-gray-200 my-2"></div>
      <div className="my-2 flex py-3 max-sm:py-1 justify-between">
        <h1 className="font-ubuntu_m text-lg">${data.price}</h1>
        <div className="w-16 rounded-lg cursor-pointer h-8 bg-white font-ubuntu_m border border-gray-200 shadow-lg flex justify-center items-center "  onClick={handleBooking}>
        <span className="title">Rent</span>
        </div>
      </div>
     </div>
    </>
  )
}
