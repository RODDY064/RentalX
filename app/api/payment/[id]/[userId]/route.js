import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient()


export const GET = async(req,{params})=>{
    try {
        const response = await prisma.rental.findUnique({
            where:{
                id:params.id
            },
            include:{
                car:true,
            }
        })

        const address = await prisma.address.findFirst({
            where:{
                userId:params.userId
            }
        })

     if(address){
        return NextResponse.json({response,address}, {status:200 })
     }else{
        return NextResponse.json({response },{status:200 })
     }

    } catch (error) {
        console.group(error)
        return NextResponse.json({error:'Internal Server Error'},{status:500})
    }
}