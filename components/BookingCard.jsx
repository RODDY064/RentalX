"use client"


import Image from "next/image"
import { motion } from "framer-motion";

export default function BookingCard({ data , rental ,setRental ,handleOrder}) {
  
 

  return (
   <div className="w-full min-h-screen gap-4 flex max-sm:flex-col max-sm:items-center">
    <div className="w-full min-h-[200px] border-2 rounded-lg border-teal-200 hidden max-sm:flex flex-col items-center">
    <div className="w-24 h-10 cursor-pointer flex items-center justify-center bg-white shadow-md rounded-lg my-4  border border-gray-200" onClick={handleOrder}>
        <h1 className="font-ubuntu_m title">Order Now</h1>
        </div>
        <div className="flex flex-col gap-y-1 items-start p-4 w-full">
         <h1>Start Date</h1>
         <input className="w-[90%] h-10 bg-cream focus:outline-none rounded-lg p-2"
         type="date" 
         onChange={(e)=>{e.preventDefault(),setRental((prevRental) => ({
          ...prevRental,
          startDate: new Date(e.target.value).toISOString(),
        }));
        }}></input>
        </div>
        <div className="flex flex-col gap-y-1 items-start p-4 w-full ">
         <h1>End Date</h1>
         <input className="w-[90%] h-10 bg-cream focus:outline-none rounded-lg p-2"
         type="date" onChange={(e)=>{e.preventDefault(),setRental((prevRental) => ({
          ...prevRental,
          endDate: new Date(e.target.value).toISOString(),
        }));
        }}></input>
        </div>
          <div className="my-4 w-[90%] h-[1px] bg-teal-400 "></div>
    </div>
    <div className="w-[70%] max-sm:w-full min-h-[700px] max-sm:min-h-[350px] border-2 rounded-lg border-teal-200 flex flex-col items-center">

  
    <div className="flex gap-6 max-sm:gap-4 my-3">
        <div className="flex flex-col gap-2 items-center">
        <div className="w-12 h-12 bg-white rounded-full border shadow-md border-teal-400 flex items-center justify-center">
        <Image src='/assets/icons/automatic.svg' alt="transmission"  width={30} height={30}/>
        </div>
        <h4 className="text-sm ">transmission</h4>
        </div>
        <div className="flex flex-col gap-2 items-center">
        <div className="w-12 h-12 bg-white rounded-full border shadow-md border-teal-400 flex items-center justify-center">
        <Image src='/assets/icons/fuel.svg' alt="fuel" width={25} height={25} />
        </div>
        <h4 className="text-sm ">fuel type</h4>
        </div>
        <div className="flex flex-col gap-2 items-center">
        <div className="w-12 h-12 bg-white rounded-full border shadow-md border-teal-400 flex items-center justify-center">
        <Image src='/assets/icons/speedometer.svg' width={30} height={30}  alt="speedometer"/>
        </div>
        <h4 className="text-sm ">mileage</h4>
        </div>
      </div>
      {!data.cardImage ?
       (<>
       <div className=" w-[95%] h-[500px] max-sm:h-[250px] border bg-white shadow-md border-gray-200 rounded-lg flex items-center justify-center">
       <motion.div
        className="border-[4px]  border-x-sky-400  border-b-sky-400 w-4 h-4 rounded-full border-t-transparent my-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
       ></motion.div>
           <h1 className='font-ubuntu_m font-medium text-lg '>loading<span className="animate-pulse">...</span></h1>
      </div>
       </>):
       (<>
         <div className=" relative w-[95%] h-[500px] max-sm:h-[250px] border border-gray-200 rounded-lg flex items-center justify-center">
         <Image src={`https://raw.githubusercontent.com/RODDY064/Images/94cfa0e0109a6fe34c3f2e56118998df3c90c3dd/database/${data.bookingImage || data.cardImage}`}   fill={true} alt="car"className="p-1 object-contain"
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </div>
       </>)

      }
      <div className="w-[95%] my-4 flex justify-end gap-4">
       {data?.images &&
        data.images.map((items,index)=>(
         <div key={index} className="w-[7.5rem] h-[5.5rem] relative bg-white border border-teal-400 rounded-lg shadow-md p-2
         flex items-center justify-center overflow-hidden">
          <Image src={`https://raw.githubusercontent.com/RODDY064/Images/94cfa0e0109a6fe34c3f2e56118998df3c90c3dd/database/${items}`}  fill={true} alt="pics" className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
         </div>
       ))}
      
      </div>
 
    </div>
     <div className="w-[28%] h-[600px]  max-sm:h-[300px] rounded-lg border-2 border-teal-200 max-sm:w-full  flex flex-col items-center">
        <div className="w-24 h-10 cursor-pointer flex items-center justify-center bg-white shadow-md rounded-lg my-4 max-sm:hidden border border-gray-200" onClick={(e)=>handleOrder(e)}>
        <h1 className="font-ubuntu_m title">Order Now</h1>
        </div>
        <div className="flex flex-col gap-y-1 items-start p-4 w-full max-sm:hidden">
         <h1>Start Date</h1>
         <input className="w-[90%] h-10 bg-cream focus:outline-none rounded-lg p-2"
         type="date" onChange={(e)=>{e.preventDefault(),setRental((prevRental) => ({
          ...prevRental,
          startDate:new Date(e.target.value).toISOString(),
        }));
        }}></input>
        </div>
        <div className="flex flex-col gap-y-1 items-start p-4 w-full max-sm:hidden">
         <h1>End Date</h1>
         <input className="w-[90%] h-10 bg-cream focus:outline-none rounded-lg p-2"
         type="date"
         onChange={(e)=>{e.preventDefault(),setRental((prevRental) => ({
          ...prevRental,
          endDate: new Date(e.target.value).toISOString(),
        }));
        }}></input>
        </div>
          <div className="my-4 w-[90%] h-[1px] bg-teal-400 max-sm:hidden"></div>
          <div className="w-[90%] mt-2">
             {data.available ? 
             (<>
             <span className="my-4 font-ubuntu_m font-medium text-xl title">Available</span>
             </>):
             (<>
              <span className="my-4 font-ubuntu_m font-medium text-xl title">Not Available</span>
             </>)
             }
            <h1>{data.message}</h1>
             <h1 className="my-4 font-ubuntu_m text-lg">${data.price} / day</h1>
             <h1>Mileage: {data.mileage}</h1>
             <h1>Transmission: {data.transmission}</h1>
             <h1>Seating:   {data.seat}</h1>
          </div>
     </div>
   </div>
  )
}
