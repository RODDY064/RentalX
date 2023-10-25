'use client'

import { convertISODateToHTMLDate } from "@app/payment/page";
import { isoDateToNormal } from "@libs/database";
import Image from "next/image";
import { useState } from "react";
import Animation from "./Animation";



export default function AccountPage({ page,session , userData, setUserData,noData}) {
const [edit , setEdit ] = useState(true)

const handleEdit =(name) =>{
 if(name === 'save'){
    setEdit(true)
 }else{
    setEdit(false)
 }
}
  
  const [oldPassword , setOldPassword] = useState(true)


  return (
    <>
    <div className='w-full h-full'>
     {page.page_0 && 
     (<>
      <div className="p-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-3"> 
             <Image src={`${session?.user.image || '/assets/images/profile.svg'}`} alt='profile'  width={57} height={57}
            className="rounded-full"/>
            <div className="my-2">
             <h1 className="font-ubuntu_m">Personal</h1>
             <h1 className="text-sm max-sm:text-[0.7rem]">{`${session?.user.email}`}</h1>
            </div>
        </div>
        <div className="w-16 max-sm:w-12 h-8 p-2 bg-white shadow-md rounded-lg cursor-pointer flex items-center justify-center border border-gray-200" onClick={()=>handleEdit('edit')}>
            Edit
        </div>
      </div>
        <div className="my-10">
        { userData.addresses ? 
        (<>
         <div className="w-full rounded-lg p-4 border border-teal-200 bg-white shadow-md">
          <h1 className="font-ubuntu_m">Personal Information</h1>
           {edit ? 
           (<>
             <div className="my-6">
             <h1>Name:  <span className="text-black/70">{userData.addresses[0]?.name}</span></h1>
             <h1>Date of Birth: <span className="text-black/70">{ userData.addresses[0]?.birthDate && (isoDateToNormal(userData.addresses[0].birthDate))}</span></h1>
              <h1>Age: <span className="text-black/70">{userData.addresses[0]?.age} years</span></h1>
           </div>
           </>):
           (<>
            <div className="my-6 w-[80%] max-sm:w-[100%] ">
              <h1>Name</h1>
              <input className="w-full  info_input border-teal-200 " type="text" 
              value={userData.addresses[0]?.name}
               onChange={(e)=>{e.preventDefault()
                /*
               setUserData((prev)=>({
                ...prev,
                address.name:e.target.value
               }))
               */
              }}
              
              />
              <h1>Date of birth</h1>
              <input className="w-full  info_input border-teal-200 " type="date"
                value={convertISODateToHTMLDate(userData.addresses[0]?.birthDate)}
                onChange={(e)=>{e.preventDefault()
                  /*
                 setUserData((prev)=>({
                  ...prev,
                  address.birthDate:e.target.value
                 }))
                 */
                }}
                
              
              />
              <h1>Age</h1>
              <input className="w-full  info_input border-teal-200 " type="number" min='18'
               value={userData.addresses[0]?.age}
               onChange={(e)=>{e.preventDefault()
                 /*
                setUserData((prev)=>({
                 ...prev,
                 address.age:e.target.value
                }))
                */
               }}
               
              />
            </div>

            </>)

           }
          </div>
          {userData.addresses?.map((item)=>(
            <div key={item.id}  className="my-4 w-full rounded-lg p-4 border border-teal-200 bg-white shadow-md">
            <h1 className="font-ubuntu_m">Address</h1>    
            {edit ? 
             (<>
               <div className="my-6">
               <h1>Street: <span className="text-black/70">{item.street}</span></h1>
               <h1>City: <span className="text-black/70">{item.city}</span></h1>
                <h1>Post Code: <span className="text-black/70">{item.postalCode}</span></h1>
             </div>
             </>):
             (<>
              <div className="my-6 w-[80%] max-sm:w-[100%] ">
                <h1>Street</h1>
                <input className="w-full  info_input border-teal-200 " type="text"
                 value={item.street}
                 onChange={(e)=>{e.preventDefault()
                   /*
                  setUserData((prev)=>({
                   ...prev,
                   address.street:e.target.value
                  }))
                  */
                 }}
                 
                
                />
                <h1>City</h1>
                <input className="w-full  info_input border-teal-200 " type="text"
                  value={item.city}
                  onChange={(e)=>{e.preventDefault()
                    /*
                   setUserData((prev)=>({
                    ...prev,
                    address.city:e.target.value
                   }))
                   */
                  }}
                  
                
                />
                <h1>Post Code</h1>
                <input className="w-full  info_input border-teal-200 " type="text"
                 value={item.postalCode}
                 onChange={(e)=>{e.preventDefault()
                   /*
                  setUserData((prev)=>({
                   ...prev,
                   address.postCode:e.target.value
                  }))
                  */
                 }}
                 />
              </div>
  
              </>)
             }
            </div>
          ))
          }

          {!edit && (
            <div className="w-full flex justify-end">
              <div className="w-16 mt-3 max-sm:w-12 h-8 p-2 bg-black shadow-md rounded-lg cursor-pointer flex items-center justify-center border border-gray-200" onClick={()=>handleEdit('save')}>
               <p className="title">Save</p>
              </div>
            </div>
          )
          }
        </>):
        (<>
         
         <div className="my-4 w-full rounded-lg p-4 border h-[200px] border-teal-200 bg-white shadow-md flex items-center justify-center">
          <Animation/>
          </div>
        </>)

        }
         </div>
      </div>
     </>)
     }
     {page.page_1 && 
        (<>
         <div className="w-full p-3">
          <h1 className="font-ubuntu_m">Booking History</h1>
            <div className="mt-10 w-full flex flex-col items-center">
             {!userData.rentals ?
             (<>
                 <div className="my-2 p-3 w-[80%] max-sm:w-full h-[200px] bg-white border border-teal-200 rounded-lg shadow-md">
                  {noData ? 
                   (<>
                   <div className="w-full h-full flex items-center justify-center"><h1 className="font-ubuntu_m animate-pulse">No Information available</h1></div>
                   </>):
                   (<Animation/>)
                  }
                 </div>
             </>):
             (<>
               {userData.rentals?.map((item)=>(
                <div key={item.id} className="my-2 p-3 w-[80%] max-sm:w-full bg-white border border-teal-200 rounded-lg shadow-md">
                    <h1>Brand Name: <span className="text-black/60 font-ubuntu_m">{item.car.brand}</span></h1>
                    <h1>Model Name:  <span className="text-black/60 font-ubuntu_m">{item.car.model}</span></h1>
                    <h1>Price: <span className="text-black/60 font-ubuntu_m">${item.totalPrice}</span></h1>
                    <h1>Start Date:  <span className="text-black/60 font-ubuntu_m">{isoDateToNormal(item.startDate)}</span></h1>
                    <h1>End Date:  <span className="text-black/60 font-ubuntu_m">{isoDateToNormal(item.endDate)}</span></h1>
                </div>
             ))
               }
             </>)
             }
            </div>
         </div>
        </>)
     }
      {page.page_2 && 
        (<>
         <div className="w-full p-3">
          <h1 className="font-ubuntu_m">Payment History</h1>
            <div className="mt-10 w-full flex flex-col items-center">
             {!userData.payments ? 
             (<>
             <div className="my-2 p-3 w-[80%] max-sm:w-full h-[200px] bg-white border border-teal-200 rounded-lg shadow-md">
             {noData ? 
                   (<>
                   <div className="w-full h-full flex items-center justify-center"><h1 className="font-ubuntu_m animate-pulse">No Information available</h1></div>
                   </>):
                   (<Animation/>)
                  }
             </div>
             </>):
             (<>
              {
               userData.payments.map((item,index)=>(
                <div key={item.id} className="my-2 p-3 w-[80%] max-sm:w-full bg-white border border-teal-200 rounded-lg shadow-md">
                    <h1>Transaction method:  <span className="text-black/60 font-ubuntu_m">{item.method}</span></h1>
                    { item.method === 'paypal' ?
                    (<>
                    <h1 className="mt-2">Total Amount: <span className="text-black/60 font-ubuntu_m">${item.amount}</span></h1>
                    <h1>Rental: <span className="text-black/60 font-ubuntu_m">{item.rental.car.model}</span></h1>
                    <h1 className="mt-2">PayPal Email: <span className="text-black/60 font-ubuntu_m">{userData.idCards[index].paypalEmail}</span></h1>
                     </>):
                    (<>
                    <h1 className="mt-2">Total Amount: <span className="text-black/60 font-ubuntu_m">${item.amount}</span></h1>
                    <h1>Rental: <span className="text-black/70">{`Rolls Royce Ghost`}</span></h1>
                    <h1 className="mt-2">Card Number: <span className="text-black/60 font-ubuntu_m">
                      {userData.idCards[index].cardNumber}</span></h1>
                    <h1>Expiry Date: <span className="text-black/60 font-ubuntu_m">{isoDateToNormal(userData.idCards[index].expirationDate)}</span></h1>
                    </>)

                    }
                </div>
             ))

              }
             </>)
             }
            </div>
         </div>
        </>)
     }
       {page.page_3 && 
        (<>
         <div className="w-full p-3">
          <h1 className="font-ubuntu_m">Change Password</h1>
            <div className="mt-10 w-full flex flex-col items-center">
            <div  className="my-2 p-3 pb-5 w-[80%] max-sm:w-full bg-white border border-teal-200 rounded-lg shadow-md">
             {oldPassword  ?
              (<>
               <h1>Old password</h1>
              <input className="w-full h-12 info_input  border-teal-200"
              placeholder="Enter your old password"/>

             <div className="w-full flex justify-end">
                <div className="w-16 mt-3  h-8 p-2 bg-black shadow-md rounded-lg cursor-pointer flex items-center justify-center border border-gray-200" onClick={()=>setOldPassword(false)}>
               <p className="title font-ubuntu_m">Submit</p>
               </div>
             </div>
              </>):
              (<>
              <div>
              <h1>New password</h1>
              <input className="w-full h-12 info_input  border-teal-200"
              placeholder="Enter your new password"/>
              </div>
              <div className="my-2">
              <h1>Confirm password</h1>
              <input className="w-full h-12 info_input  border-teal-200"
              placeholder="Re enter your new password to confirm"/>

             <div className="w-full flex justify-end">
                <div className="w-16 mt-3 h-8 p-2 bg-black shadow-md rounded-lg cursor-pointer flex items-center justify-center border border-gray-200" onClick={()=>setOldPassword(true)}>
               <p className="title font-ubuntu_m">Confirm</p>
               </div>
             </div>

            </div>
              </>)

             }
            </div>
            </div>
         </div>
        </>)
     }
     {page.page_5 && (
      <div className="w-full p-3 flex flex-col items-center">
      <h1 className="font-ubuntu_m">Welcome to FeedBack</h1>
      <div className="w-[80%] my-10">
        <h1 className="text-black/80">FeedBack Box</h1>
        <textarea className="w-full bg-cream border-gray-200 border my-2 rounded-lg min-h-[200px] max-h-[300px] focus:outline-none 
        focus:border-teal-200 p-2" typeof="text"/>
      </div>
      </div>
     )

     }
  
    </div>
    </>
  )
}
