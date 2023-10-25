import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'


const prisma = new PrismaClient()

export const POST= async(req)=>{
 try {
    const {email, password} = await req.json() 
  
     
  if(!email || !password){
    return  NextResponse.json({error:"Missing  email or password"})
  }

    const user = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(user){
        return NextResponse.json({error:'Email already exist!'},{status:400}) 
    }

    const passwordHashed = await bcrypt.hash(password,10)
   const createUser = await prisma.user.create({
    data:{
        email:email,
        password:passwordHashed
    }
   })

   return NextResponse.json(createUser,{status:200})
 } catch (error) {
    console.log(error)
    return NextResponse.json({error:'Internal Server Error'},{status:500})
 }

}