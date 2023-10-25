
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'



const prisma = new PrismaClient()

export const handle = NextAuth({
    adapter:PrismaAdapter(prisma),
    providers:[
      GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
      }),
      GithubProvider({
        clientId:process.env.GITHUB_ID,
        clientSecret:process.env.GITHUB_SECRET,
      }),
      CredentialsProvider({
        name:'credentials',

        credentials:{
            username:{label:'Username',type:'email',placeholder:'Enter your username'},
            password:{label:'Password',type:'password',placeholder:'Enter your password'}
        },
        async authorize(credentials, req){
            try {
                // check to see if email and password is there
              if(!credentials.username || !credentials.password ){
                throw new Error('Please enter an email and password')
              }
  
              const user = await prisma.user.findUnique({
                where:{
                  email:credentials.username
                }
              })
               
              if(!user || !user.password){
                throw new Error('The email address you entered is not registered with us')
              }

              const passwordCompare = await bcrypt.compare(credentials.password,user.password)
                 
              if(!passwordCompare){
                throw new Error('Invalid username or password. Please try again.')
              }

              return user

            } catch (error) {
              console.log(error)
              return null
            }

        }
      })
    ],
    callbacks:{
      async  session({ session }){
        const sessionUser = await prisma.user.findUnique({
          where:{
            email:session.user.email
          }
        })
    
        session.user.id = sessionUser.id
        return session
      }
    },
    pages:{
      signIn:'/signin',
    },
    session:{
      strategy:'jwt'
    },

})




export { handle as GET , handle as POST }

