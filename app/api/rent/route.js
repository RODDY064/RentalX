import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const POST = async(req,res)=>{
  try {
    const request = await req.json()
     
    const { search } = request
    
    const filterSearch = search.charArt(0).toUpperCase() + search.slice(1) 
   
    const data = await prisma.car.findMany({
      where:{
        OR:[
          {
           brand:filterSearch
          },
          {
            model:filterSearch
          }
        ]
         
      }
    })

    if(data.length === 0){
      const allItem = prisma.car.findMany()  
      return NextResponse.json(allItem, {status:200})
    }else{
    return NextResponse.json(data, {status:200})
    }


  } catch (error) {
    console.log(error)
    return NextResponse.json({error:'Internal server error'},{status:500})
  }

}