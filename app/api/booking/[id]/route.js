import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();




// get the booking data

export const GET = async(req,{params})=>{
  try {
    const data = await prisma.car.findUnique({
      where:{
        id:params.id
      }
    })
    
    return NextResponse.json(data,{status:200})
  } catch (error) {
    console.log(error)
    return NextResponse.json({error:'Internal server error'},{status:500})
  }

}


export const POST = async(req,{params})=>{
  try {
     
    const response = await req.json()
    const {startDate , endDate , userId , carId ,totalPrice } = response
    
   try {
      const existingRental = await prisma.rental.findFirstOrThrow({
       where:{
        userId:userId,
        carId:carId,
        startDate: {
          lte: endDate,
        },
        endDate: {
          gte: startDate,
        },
       }
      });

      const updatedRental = await prisma.rental.update({
        where:{
          id:existingRental.id
        },
        data:{
            startDate: startDate,
            endDate: endDate,
            totalPrice:totalPrice
        }
      })

      return NextResponse.json(updatedRental,{status:200})
    } catch (error) {

      const cardFind = await prisma.car.findUnique({
        where:{
          id:carId
        }
      })

       if(!cardFind.available){
        return NextResponse.json({error:'Model not available'},{status:400})
       }



      const newRental = await prisma.rental.create({
        data: {
          userId: userId,
          carId: carId,
          startDate: startDate,
          endDate: endDate,
          totalPrice:totalPrice,
        },
      });


      return NextResponse.json(newRental,{status:200})
    } 
    
  }catch (error ){
    console.log(error)
    return NextResponse.json({error:'Internal server error'},{status:500})
  }

}


