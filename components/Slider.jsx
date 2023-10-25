import { motion } from 'framer-motion'
import { circle ,circle_mem} from '@motion/motions'
import Image from 'next/image'
import { stars } from '@libs/database'
import Card from './Card'
import { useEffect, useRef, useState } from 'react'
import Animation from './Animation'

export default function Slider() {

  const [data,setData] = useState([])
  const[cardData,setCardData] =  useState([])

  // when the app mount fetch the from the database
  const getData = async()=>{
    try {
      const res = await fetch('api/car')

      if(res.ok){
        const body = await res.json()
        setData(body)
        
      }
    } catch (error) {
      console.log(error)
      return new Error('Fail to fetch data')
    }
  }
 

   // group by the brand and display it in the card 
  const handleCardFilter = async(e,brand)=>{
    e.preventDefault()
    const filter = data.filter((item)=>(
      item.brand.toLowerCase().includes(brand.toLowerCase())
    ));
    setCardData(filter)
  }


   useEffect(()=>{
    // get dta function
   getData()
  },[])
  
   

  // when the data arrives filter by the first brand new in the slider card
  useEffect(()=>{
    const filter = data.filter((item)=>(
      item.brand.toLowerCase().includes('rolls royce')
    ));
    setCardData(filter)
  },[data])


  const sliderRef = useRef(null);

  const handleNextClick = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft += containerWidth;
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft -= containerWidth;
    }
  };



  return (
    <>
    <div className='w-full my-10  flex flex-col  items-center justify-center max-sm:w-[98%]'>
      <h1 className='intro_heading'>Explore Our Top Deal from <br />Our Top-Related Dealers</h1>
      <div className='w-[95%] h-[750px] bg-cream/70 rounded-lg border-2 border-gray-200 shadow-lg flex overflow-hidden'>
       <div className='background w-[50%] h-full bg-animate_bg'></div>
       <div className='background w-[50%] h-full bg-animate_bg_2'></div>
       <div className='absolute  flex items-center justify-center  w-[95%] h-[748px]'>
        <motion.div 
         variants={circle}
         animate='animate'
         exit='exit'
        className='relative  w-[18rem] h-[18rem] bg-white border-2 border-gray-200 rounded-md  grid place-content-center'>
          <span className="relative w-14 h-14 border border-gray-200  bg-white rounded-full shadow-md flex justify-center items-center">
            <Image src='/assets/images/round.svg' alt='round' width={40} height={40}/>
           </span>
           <div className="absolute z-[-1] w-[100%] h-[100%] flex flex-wrap items-center justify-center">
                     {stars.map((star)=>(
                       <motion.div 
                        variants={circle_mem}
                       key={star.id} className="w-[40%] h-[40%] border-2 border-gray-200  rounded-full bg-white  grid place-content-center">
                        <Image src={star.image} alt='star' width={100} height={100}
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                         
                        />
                       </motion.div>
                     
                     )) }
            </div>
        </motion.div>
       </div>
       <div className='absolute w-[96%] home border flex flex-col items-center border-gray-200 h-[747px]  rounded-lg overflow-hidden '>
         <div className='mt-8 mb-4 flex  max-sm:justify-center gap-4 max-sm:gap-3 max-sm:flex-wrap'>
          {['Rolls Royce','Bugatti','Bentley','Benz','Ferrari','BMW'].map((brand,index)=>(
            <div key={index} className='w-[7rem] h-12 bg-white_glass border-2 border-gray-200 shadow-lg rounded-lg cursor-pointer flex justify-center items-center hover:bg-black ' onClick={(e)=>handleCardFilter(e,brand)}><span className='title text-lg font-ubuntu_m'>{brand}</span></div>
          ))
          }
          </div>

       {!cardData[0] ? 
       (<>
        <Animation/>
       </>):
       (<>
          <div className='w-full  py-1  px-8 h-[570px] my-6 max-sm:my-2 flex gap-8  overflow-x-auto' id='slider' ref={sliderRef}>
          {cardData.map((item)=>(
             <Card key={item.id} data={item}/>
          ))}
          <div className='absolute bottom-3 w-full h-auto p-2 flex items-center justify-center gap-4 max-sm:gap-3'> 
          <div className='w-14 h-14 rounded-full bg-black shadow-lg cursor-pointer flex items-center justify-center ' onClick={handlePrevClick}>
          <Image src='/assets/icons/preview.svg' alt='button' width={34}  height={34}/>
             </div>
             <div className='w-14 h-14 rounded-full bg-black shadow-lg cursor-pointer flex items-center justify-center ' 
             onClick={handleNextClick}>
              <Image src='/assets/icons/next.svg' alt='button'   width={34}  height={34}/>
             </div>
          </div>
         </div>
       </>)
       }

       </div>
      </div>
    </div>
    </>
  )
}
