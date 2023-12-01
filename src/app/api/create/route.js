import { NextResponse } from "next/server";

export async function POST(req){
    const finalData= await req.json();
    console.log(finalData);

 try{
    const options={
        method:"POST",
        headers: {
          "Content-type": "application/json",
      },
        body:JSON.stringify(finalData)
      }
      let result = await fetch("https://agency.teamrabbil.com/api/CreateContact",options);
      let mainData= await result.json();
      return NextResponse.json({status:"success",data:mainData},{status:201})
 }
 catch(e){
    return NextResponse.json({ error: e.message });
 }

}