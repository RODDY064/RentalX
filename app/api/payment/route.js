import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'


const prisma = new PrismaClient()

export const POST = async(req)=>{
    try {
     
        const paymentData = await req.json()

     const   {
            name,
            age,
            birthDate,
            amount,
            postCode,
            street,
            city,
            cardNumber,
            expirationDate,
            cvv,
            cardHolder,
            licenseNumber ,
            expirationLicenseDate ,
            rentalId,
            userId,
            carId,
            method,
            paypalEmail,
            paypalPassword  

        } =  paymentData


        const isoBirthDate = new Date(birthDate).toISOString()


        const payments = await prisma.payment.create({
            data:{
              amount:amount,
              rentalId:rentalId,
              userId:userId,
              method:method
            }
        })


        const existingAddress = await prisma.address.findFirst({
            where:{
                userId:userId,
                name:name,
                birthDate:isoBirthDate,
                street:street,
                city:city,
                postalCode:postCode
                
            }
        })


        if(!existingAddress){

            const userAddress = await prisma.address.create({
                data:{
                name:name,
                age:age,
                birthDate:isoBirthDate,
                street:street,
                city:city,
                postalCode:postCode,
                userId:userId

                }
            })

        }


        


        if(paymentData.method === "card"){

            const cvvHashed = await bcrypt.hash(cvv,10)


            const idCards = await prisma.idCard.create({
                data:{
                method:method,
                cardNumber:cardNumber,
                cardHolder:cardHolder,
                cvv:cvvHashed,
                expirationDate: new Date(expirationDate).toISOString(),
                userId:userId
                }
            
            })
        }else {

            const paypalPasswordHashed = await bcrypt.hash(paypalPassword,10)
            const idCards = await prisma.idCard.create({
                data:{
                 method:method,
                 paypalEmail:paypalEmail,
                 paypalPassword:paypalPasswordHashed,
                userId:userId

                }
            })
        }

 
        const updateCar = await prisma.car.update({
            where:{
               id:carId,

            },
            data:{
                available:false
            }
        })


        return NextResponse.json({status:200})
 
        
    } catch (error) {
      console.log(error)  
      return NextResponse.json({error:'Internal Server Error'},{status:500})

    }

}