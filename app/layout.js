import Footer from '@components/Footer';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';
import { Inter } from 'next/font/google'
import ToasterContext from '@components/ToastContext';


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'RentalX - Car Rentals | Your Destination for Affordable Car Hire',
  description: 'Where Every Mile Feels Like a Smile. Discover a wide range of rental cars for your next journey.',
  keywords: 'Car Rental, Rent a Car, Vehicle Rental, Car Hire, Rent a Vehicle, Luxury Car Rentals, Economy Car Rentals, Exotic Car Rentals, Family Car Rentals, Business Car Rentals, Weekly Car Rental, Monthly Car Rental, One-Way Car Rental, Best Car Rental Deals, Car Rental Discounts, Car Rental Near Me, Online Car Booking, Car Reservation, Car Rental Services, Car Fleet, Car Models, Car Availability, Car Rental Rates, Car Rental Insurance'
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Provider>
          <main className='w-[100vw] min-h-screen '>
           <div className='absolute z-[-1] w-[100vw] h-[100vh] bg-main hero'></div>
           <div className="absolute z-[-1] home  w-[100vw] h-[100vh]  rounded-md"></div>
           <ToasterContext/>
           <Nav/>
           {children}
           <Footer/>
           </main>
         </Provider>
        </body>
    </html>
  )
}
