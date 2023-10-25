import Image from "next/image"
import Link from "next/link"

export default function Service() {
  return (
   <>
    <section className='my-12' id="service">
     <div className='w-[100%]  h-10 flex justify-center items-center'>
        <div className="relative w-[70%] max-sm:w-[90%] h-full">
        <Image src='/assets/images/logos.png' fill={true} alt="sponsors"/>
        </div>
     </div>
    </section>
    <div className="w-full  h-[100vh] max-sm:h-[28rem] md:h-[40rem] flex flex-col justify-center items-center pb-10">
    <h1 className="font-bold  font-ubuntu_m my-4">feel the road Experience with  <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">our rental</span> service</h1>
     <div className="w-[97%] h-[95%] max-sm:p-0 shadow-lg service rounded-md border-2 border-gray-200 p-2">
        <div className="w-full h-full home flex items-center justify-center">
          <div className="circle">
           <div className="w-[50%] h-[50%] bg-white_glass rounded-full backdrop-blur-xl flex items-center justify-center">
           </div>
          </div>
          <div className="absolute w-full h-full z-20 max-sm:relative">
           <div className="ml-[6rem] my-10 w-[23rem] h-[90%] rounded-lg border-2 border-white bg-cream max-sm:mx-4 max-sm:w-[80%] max-sm:my-2 flex flex-col items-center"> 
            <h1 className="my-4 font-medium">Our Best Service Include:</h1>
             <div className="flex flex-col gap-4 p-2">
               <div className="flex gap-3">
                <span className="w-14 h-14 bg-white rounded-md shadow-sm flex justify-center items-center">
                  <Image src='/assets/icons/purchase.svg' width={34} height={34} alt="purchase"/>
                </span>
                 <div className="flex flex-col gap-1">
                    <h1 className="font-ubuntu_m">Deals for every budget</h1>
                    <h2 className="text-sm leading-3 text-black/70">Incredible and affordable price <br /> on every car you rent </h2>
                 </div>
               </div>
               <div className="flex gap-3">
                <span className="w-14 h-14 bg-white rounded-md shadow-sm flex justify-center items-center">
                <Image src='/assets/icons/shopping.svg' width={34} height={34} alt="shopping"/>
                </span>
                 <div className="flex flex-col gap-1">
                    <h1 className="font-ubuntu_m">Best price guaranteed <br /></h1>
                    <h2 className="text-sm leading-3 text-black/70">Discover our best price guaranteed<br /> Your wallet's new road trip buddy!</h2>
                 </div>
               </div>
               <div className="flex gap-3">
                <span className="w-14 h-14 bg-white rounded-md shadow-lg flex justify-center items-center">
                <Image src='/assets/icons/support.svg' width={34} height={34} alt="support"/>
                </span>
                 <div className="flex flex-col gap-1">
                    <h1 className="font-ubuntu_m">Support 24/7</h1>
                    <h2 className="text-sm leading-3 text-black/70">We have a customer service 24/7 to<br />
                     provide you any support you needed </h2>
                 </div>
               </div>
             </div>
           </div>
          </div>
          <Link href='/rent' className="absolute w-14 h-14 bg-white rounded-full p-3 shadow-xl flex justify-center items-center font-ubuntu_m cursor-pointer z-30 max-sm:hidden"><span className="title">Rent</span></Link>
        </div>
      </div>
    </div>
    <div className="my-2">
     <h1 className="p-5 font-ubuntu_m font-medium text-[2rem]">Requirement</h1>
     <div className=" relative ml-16 p-2 w-[70%]  bg-white border-2 border-gray-200 shadow-lg rounded-lg max-sm:ml-7 max-sm:w-[90%]">
        <div className="w-full  p-4 flex flex-col gap-3">
        <div>
        <h1> 1. Personal Data</h1>
         <ul className="ml-10 list-disc">
            <li>Personal </li>
            <li>Address</li>
            
         </ul>
        </div>
         <h1 >2.  Age from 18 years old</h1>
         <h1 >3.  Three (3) years of driving Experience</h1>

        </div>
     </div>
    </div>
   </>
  )
}
