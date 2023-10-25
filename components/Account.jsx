import UserPage from "./UserPage"
import AccountPage from "./AccountPage"
import Image from "next/image"

export default function Account({isSmallDevice, handlePage, page ,onMobile, userData, session ,handleBack }) {
  return (
    <>
    <h1 className="font-ubuntu_m text-2xl p-4">My Account</h1>
    <div>
    <Image src='/assets/icons/arrow.svg' width={30} height={30} alt="arrow" className="ml-4 my-4 cursor-pointer rounded-full"
     onClick={handleBack}/>
     {isSmallDevice && onMobile ?
      (<>
       <UserPage  handlePage={handlePage} />
      </>):
      (<>
        <AccountPage  page={page} session={session} userData={userData} />
      </>)
     }
    </div>
    </>
  )
}
