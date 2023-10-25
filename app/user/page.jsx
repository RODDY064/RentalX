'use client';

import Account from "@components/Account";
import AccountPage from "@components/AccountPage";
import UserPage from "@components/UserPage";
import { useSession } from "next-auth/react";
import { useState,useEffect } from "react";

export default function page() {

  const {data: session} = useSession()

  const [userData , setUserData] = useState([])
  const[noData,setNoData]= useState(true)
  const [isSmallDevice , setIsSmallDevice] = useState()
  const [onMobile, setOnMobile ] = useState(true)
   
   const getData  = async()=>{
    try {
      const response = await fetch(`api/user/${session?.user.id}`,{
        method:'GET'
      })
       
      if(response.ok){
        const body = await response.json()
        setUserData(body)
      }

    } catch (error) {
      return new Error('Fail to fetch Data')
    }

   }


 useEffect(()=>{
   if(session?.user){
    getData()
   }
 },[])

 
  
  useEffect(() => {
    const isSmallDevice = window.innerWidth < 768;
    setIsSmallDevice(isSmallDevice);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);
 
   const handleResize = () => {
    const isSmallDevice = window.innerWidth < 768;
    setIsSmallDevice(isSmallDevice);
    };


useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
  }, []);


  //pages state management s
  const [page, setPage] = useState({
    page_0: true,
    page_1: false,
    page_2: false,
    page_3: false,
    page_4: false,
    page_5: false,
    page_6: false,
  });
  
  

  // function for   changing the pages 
  const handlePage = (e, id) => {
    e.preventDefault();
      
     if(isSmallDevice){
      setOnMobile(false)
     }

    setPage((prev) => {
      const updatedPage = {};
      for (let key in prev) {
        updatedPage[key] = key === `page_${id}`;
      }
      return updatedPage;
    });
  };
  
   const handleBack = ()=>{
      setOnMobile(true)
   }


  return (
   <>
   <div className="w-full  flex flex-col items-center pb-20 max-sm:pb-10">
    <div className="flex p-5 w-[95%] h-full gap-4 max-sm:px-2">
      <div className="w-[30%]   max-sm:w-full  bg-white border border-teal-200 shadow-lg rounded-lg p-2 ">
      {isSmallDevice ? 
      (<>
        <Account isSmallDevice={isSmallDevice} handlePage={handlePage} page={page} onMobile={onMobile}
        userData={userData} session={session} handleBack={handleBack} noData={noData} />
      </>):
      (<>
       <h1 className="font-ubuntu_m text-2xl p-4">My Account</h1>
         <UserPage  handlePage={handlePage}    />
      </>)
      }
      </div>
      <div className="w-[60%]  bg-white border border-teal-200 shadow-lg rounded-lg p-2 max-sm:hidden">
        <AccountPage  page={page} session={session} userData={userData}  setUserData={setUserData} noData={noData} />
      </div>
    </div>
   </div>
   </>
  )
}
