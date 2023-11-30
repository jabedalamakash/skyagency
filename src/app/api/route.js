import { NextResponse } from "next/server";

export async function POST(req,res){
    const finalData= await req.json()

 try{
    const options={
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(finalData)
      }
      let result = await fetch("https://agency.teamrabbil.com/api/CreateContact",options)
      let mainData= await result.json()
    //   console.log(resData)
      return NextResponse.json({status:"success",data:mainData})
 }
 catch(e){
    return NextResponse.json({ error: e.message });
 }

}