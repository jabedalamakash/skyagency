import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req){
   try{
    const emailData= await req.json();
    const {email} = emailData
    console.log(email);
    const prisma= new PrismaClient();
    const data= await prisma.subscribers.create({
      data:{
         email,
      }
    })
    return NextResponse.json({status:"success",data:data},{status:201})
   }
   catch(e){
      return NextResponse.json({status:"fail",data:e.toString()},{status:404});
   }
   }

