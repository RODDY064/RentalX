import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { carData } from "@libs/database";

const prisma = new PrismaClient()


export const POST = async (res,req)=> {
    try {
        
        for (const car of carData) {
            await prisma.car.create({
              data: car,
            })
        }

        return NextResponse.json({success:'Data insert successfully'},{status:200})
    } catch (error) {
      console.log(error)   
      return NextResponse.json({error:'Internal Sever Error'},{status:500})
    }

}