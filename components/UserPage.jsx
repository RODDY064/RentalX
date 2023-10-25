import { accountPageItems } from "@libs/database"



export default function UserPage({handlePage }) {
  return (
    <div className="mx-4 max-sm:mx-2">
         {accountPageItems.map((item)=>(
          <div key={item.id}
           className="py-4 my-2 cursor-pointer border hover:border-teal-400  border-gray-200 bg-white shadow-md rounded-md
           flex items-center justify-center" onClick={(e)=>handlePage(e,item.id)}
          ><p className="font-medium text-center">{item.item}</p></div>
         ))

         }
       </div>
  )
}
