import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { carData } from "@libs/database";

const prisma = new PrismaClient()


export const POST = async(req)=> {
    try { 
        
     await prisma.car.createMany({
        data:carData
     })

     console.log('Cars created in the database.');    
     return NextResponse.json({status:200})

    } catch (error) {
    return NextResponse.json({error:'Internal Sever Error'},{status:500})
    
    }

}

