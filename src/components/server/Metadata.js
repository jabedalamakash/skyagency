const fetchData=async ()=>{
    const reqData = await fetchData("https://agency.teamrabbil.com/api/SiteMeta/home")
    const resData=await reqData.json()
    console.log(resData);
   }

   import React from 'react'
   
   export default function Metadata() {
     return (
       <div>Metadata</div>
     )
   }
   