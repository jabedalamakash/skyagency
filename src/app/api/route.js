import { NextResponse } from "next/server";

export async function POST(req,res){
    const data= await req.json()

    
    const options={
        method:"POST",
        body:JSON.stringify(data)
      }
      let res = await fetch("https://agency.teamrabbil.com/api/CreateContact",options)
      let resData= await res.json()
    //   return resData;
      console.log(resData)
      return NextResponse.json({status:"success",data:resData})
}