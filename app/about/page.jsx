import Reviews from '@components/Reviews'
import Image from 'next/image'


export default function About() {
  return (
    <>
    <div className='w-full min-h-screen px-4 flex flex-col items-center'>
      <div className='w-[95%]'>
      <h1 className='max-sm:text-center max-sm:mx-0 text-4xl font-ubuntu_m font-medium'>About Us</h1>
       <div className='w-full my-10 flex gap-4 max-sm:flex-col   max-sm:items-center'>
        <div className='w-[60%] max-sm:w-full'>
        <h1><span className='text-2xl title font-ubuntu_m'>RentalX </span>is where innovation meets elegance. Our commitment to providing you with a remarkable car rental experience goes beyond the ordinary. We're driven by the latest technology and guided by a sense of style that ensures your journey is not just convenient but also a statement of your unique taste. </h1>
        
        <div className='my-4 '>
          <h1>In the world of car rentals, <span className='text-2xl title font-ubuntu_m'>RentalX </span> stands out as a fusion of tech-savvy convenience and fashionable finesse, redefining how you travel with a touch of class and sophistication.</h1>
        </div>
 
        </div>
        <div className='w-[40rem] h-[340px] max-sm:h-[300px] rounded-lg shadow-lg border-teal-200 bg-white max-sm:w-full  relative'>
        <Image src='/assets/images/blue.png' fill={true} alt='benz'/>
        </div>
       </div>

       <div className='w-full my-10 flex gap-10 max-sm:flex-col   max-sm:items-center'>
       <div className='w-[40rem] h-[340px] max-sm:hidden rounded-lg shadow-lg border-teal-200 bg-white max-sm:w-full  relative'>
       <Image src='/assets/images/tail.png' fill={true} alt='tail'/>
       </div>

        <div className='w-[60%] max-sm:w-full'>
        <h1 className='max-sm:text-center'><span className='text-2xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent  font-ubuntu_m font-bold '>Why Choose Us </span></h1>
        <ul className='my-4 gap-4'>
          <li><span className='title text-lg font-ubuntu_m'>Tech-Savvy Excellence</span>: Our team of expert developers has created a seamless online platform that lets you book your dream car with just a few clicks. We use the latest technology to ensure a hassle-free reservation process, and our website is built using top-notch technologies like React and Next JS to give you the best user experience.</li>

          <li className='my-2'><span className='title text-lg font-ubuntu_m'>Fashionable Fleet:</span>: We believe that your ride should match your style. That's why we offer a fleet of the latest and trendiest vehicles. Whether you're looking for a sleek sedan, a rugged SUV, or a chic convertible, you'll find a car that not only gets you from A to B but also turns heads along the way.</li>
        </ul>

        </div>
       </div>
      </div>
      <div className='w-[95%  px-4'>
      <ul className='my-4 w-[70%] max-sm:w-full'>
      <li><span className='title text-lg font-ubuntu_m'>Customer-Centric Service</span>: Our commitment to customer satisfaction is unwavering. We understand that your needs are unique, and our dedicated team is here to ensure that your rental experience is tailored to your specific preferences.</li>

      <li className='my-2'><span className='title text-lg font-ubuntu_m'>Safe and Reliable</span>: Your safety is our top priority. We maintain our vehicles meticulously, and they undergo regular inspections to guarantee reliability and peace of mind on the road.</li>

      </ul>
      </div>
      <div className='my-10 w-full px-4'>
      <span className='font-bold  text-2xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent  font-ubuntu_m'>
         Join us, </span>
        <h1>this exciting journey where technology, fashion, and the love of the open road come together. At <span className='font-ubuntu_m title'>RentalX
          </span>, we're not just renting cars; we're creating memorable moments.</h1>
        </div>

        <h1 className='my-6'>
        Thank you for choosing us as your trusted car rental partner. Let's embark on your next adventure together!
        </h1>
      <Reviews/>
    </div>
    </>
  )
}

