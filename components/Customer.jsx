import Image from "next/image"

export default function Customer() {
  return (
   <>
   <div className='w-full flex flex-col items-center my-2'>
    <h1 className='intro_heading'>We Are Ensuring The Best <br />Customer Experience</h1>
    <h2 className='text-center text-black/70 my-3 max-sm:mx-4'>You cannot put a price on your family's safety and security <br />
    on the road side. Find a lower price?</h2>
      <div className='w-[80%] h-[750px] xl:h-[800px] relative my-4 max-sm:h-[380px] max-sm:w-[94%]'>
        <Image src='/assets/images/customer.png' alt="customer"    fill={true}/>
      </div>
   </div>
   </>
  )
}
