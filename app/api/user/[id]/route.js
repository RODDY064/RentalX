import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient ();

export const GET = async(req,{params})=>{
  
 try {

    const data = await prisma.user.findUnique({
      where:{
         id:params.id
      },
      include:{
         rentals:{
            include:{
               car:true
            }
         },
         payments:{
            include:{
               rental:{
                  select:{
                     car:true
                  }
               }
            }
         },
         addresses:true,
         idCards:true,

      }
    })
    
    if (data === null || 
      data.rentals === null || 
      data.payments === null || 
      data.addresses === null || 
      data.idCards === null) {
    // Handle the case where any of the properties are null
    return new NextResponse({
      status: 404, // You can choose an appropriate HTTP status code
      body: 'Data not found', // Provide an appropriate response message
    });
   }
  


   return NextResponse.json(data,{status:200})

 } catch (error) {
    console.log(error)
    return NextResponse.json({error:'Internal Server Error'},{status:500})
 }

}