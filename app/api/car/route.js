import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient

export const GET = async(res, req)=>{
    try {
     
      const carData = await prisma.car.findMany()

      if(!carData){
        return NextResponse.json({error:'Fail to fetch the car data'},{status:400})
      }

      return NextResponse.json(carData,{status:200})
        
    } catch (error) {
     console.log(error)
     return NextResponse.json({error:'Internal Server Error'},{status:500})
        
    }
}