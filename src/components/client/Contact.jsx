const fetchData=async ()=>{
    const reqData = await fetchData("https://agency.teamrabbil.com/api/CreateContact")
    const resData=reqData.json()
    console.log(resData);
   }

export default function Contact() {
  
  return (
    <div>Contact</div>
  )
}
