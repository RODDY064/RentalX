"use client"


import Card from "@components/Card"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { filter_animate } from "@motion/motions"
import Image from "next/image"


export default  function Rent() {

  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const loc = searchParams.get('location')

  const [cardFilter , setCardFilter] = useState([])

   const [filter, setFilter] = useState({
    brand:'',
    location:'',
    year:'',
    price:''

   })
 
  


   const [data, setData] = useState([])
   const getData = async ()=>{
    try {
          const response = await fetch('api/car',{
            method:'GET'
          })
          if(response.ok){
            const res =  await response.json()
            setData(res)
          }
      }
       catch (error) {
      console.log(error)
      return new Error('Fail to fetch the data')
    }}

  useEffect(()=>{
   getData()
  },[])
  

   useEffect(()=>{
    setFilter((prevValue)=>({
      ...prevValue,
      brand:search,
      location:loc
    }))
   },[])


   // filter the data by the items in the filter

   useEffect(()=>{
     if(search || loc){
      const filterData = data.filter((item)=>(
        item.brand.toLowerCase().includes(filter.brand.toLowerCase()) 
      ))
      setCardFilter(filterData)
     }else{
      setCardFilter(data)
     }
   },[data])

  
   useEffect(() => {
  const filterData = data.filter((item) => {
    const brandCondition =
      !filter.brand || item.brand.toLowerCase().includes(filter.brand.toLowerCase());
    const priceCondition =
      !filter.price || item.price.toString().includes(filter.price.toString());
    const yearCondition =
      !filter.year || item.year.toString().includes(filter.year.toString());

    return brandCondition && priceCondition && yearCondition;
  });

  setCardFilter(filterData);
}, [filter]);

  
  const [isAnimating , setIsAnimating]=useState(true)


  return (
    <>
    <div className="w-full min-h-screen px-1 pb-10">
     <div className="flex max-sm:flex-col max-sm:items-center">
         <div className="w- h-[570px]  rounded-lg border flex flex-col items-center border-gray-200   mx-2 max-sm:hidden overflow-hidden">
            <h1 className="text-center my-4 font-medium text-lg">
              Filter By
            </h1>
            <div className="w-[95%] h-[1px] bg-gray-200 rounded-md my-4"></div>
            <div className="w-[95%]  h-[80%] flex flex-col  gap-4">
             <div className="flex gap-3 justify-between" >
              <h1 className="font-medium text-lg">Brand</h1>
            <input className="filter_input" placeholder="by  brand"
            value={filter.brand} onChange={(e)=>setFilter((prev)=>({
              ...prev,brand:e.target.value}))}></input>
              </div>
              <div className="flex gap-3 justify-between" >
              <h1 className="font-medium text-lg">Location</h1>
              <input className="filter_input" type="text" placeholder="by  location"
              value={filter.location} onChange={(e)=>setFilter({location:e.target.value})}></input>
              </div>
              <div className="flex gap-3 justify-between" >
              <h1 className="font-medium text-lg">Year</h1>
              <input className="filter_input invalid:border-red-500 focus:valid:border-lime-400/70" type="number"
              placeholder="by   year" max='2023' min='1997' value={filter.year} 
              onChange={(e)=>setFilter({year:e.target.value})}></input>
              </div>
              <div className="flex gap-3 justify-between" >
              <h1 className="font-medium text-lg">Price </h1>
              <input className="filter_input invalid:border-rose-500" type="number" min='300' max='1000' placeholder="by price in $"
              value={filter.price} onChange={(e)=>setFilter({price:e.target.value})}></input>
              </div>
            </div>
         </div>
         <div className="w-[95%] h-12  hidden max-sm:inline  my-4">
          <h1 onClick={()=>setIsAnimating(!isAnimating)}>
          <Image src='/assets/icons/menu.svg' width={35} height={35} alt='arrow'/>
          </h1>
         {isAnimating && 
         (
          <motion.div 
           variants={filter_animate}
           initial='hidden'
           animate='visible'
           exit='hidden'

          className="my-4 w-full p-2">
          <div className="w-full h-[400px]  rounded-lg border flex flex-col items-center border-gray-200  overflow-hidden">
            <h1 className="text-center my-4 font-medium text-lg">
              Filter By
            </h1>
            <div className="w-[95%] h-[1px] bg-gray-200 rounded-md my-4"></div>
            <div className="w-[95%]  h-[80%] flex flex-col  gap-4">
             <div className="flex gap-3 justify-between" >
              <h1 className="font-medium text-lg">Brand</h1>
            <input className="filter_input" placeholder="by  brand"
            value={filter.brand} onChange={(e)=>setFilter((prev)=>({
              ...prev,brand:e.target.value}))}></input>
              </div>
              <div className="flex gap-3 justify-between" >
              <h1 className="font-medium text-lg">Location</h1>
              <input className="filter_input" type="text" placeholder="by  location"
              value={filter.location} onChange={(e)=>setFilter({location:e.target.value})}></input>
              </div>
              <div className="flex gap-3 justify-between" >
              <h1 className="font-medium text-lg">Year</h1>
              <input className="filter_input invalid:border-red-500 focus:valid:border-lime-400/70" type="number"
              placeholder="by   year" max='2023' min='1997' value={filter.year} 
              onChange={(e)=>setFilter({year:e.target.value})}></input>
              </div>
              <div className="flex gap-3 justify-between" >
              <h1 className="font-medium text-lg">Price </h1>
              <input className="filter_input invalid:border-rose-500" type="number" min='300' max='1000' placeholder="by price in $"
              value={filter.price} onChange={(e)=>setFilter({price:e.target.value})}></input>
              </div>
            </div>
         </div>


          </motion.div>
         )

         }
         </div> 
        {!cardFilter.image ?
         (<>
         <div className="w-[75%] max-sm:w-[95%] min-h-[700px] rounded-lg border flex items-center justify-center gap-2">
         <motion.div
         className="border-[4px]  border-x-sky-400  border-b-sky-400 w-4 h-4 rounded-full border-t-transparent my-20"
         animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
         ></motion.div>
       <h1 className='font-ubuntu_m font-medium text-lg '>loading<span className="animate-pulse">...</span></h1>
         </div>
         </>):
         (<>
          <div className={`w-[75%] max-sm:w-[95%] min-h-[700px] rounded-lg border  flex  gap-10 max-sm:gap-4 flex-wrap justify-center  border-gray-200 p-4  ${isAnimating ? 'max-sm:hidden' :''}  `}>
            {cardFilter.map((item)=>(
              <Card key={item.id} data={item}/>
            ))

            }
         </div>
         </>)
        }
     </div>
    </div>
    </>
  )
}
