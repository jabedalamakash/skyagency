const fetchData=async ()=>{
    const reqData = await fetchData("https://agency.teamrabbil.com/api/TestimonialList")
    const resData=reqData.json()
    console.log(resData);
   }
export default function Testmonial() {
  return (
    <div>Testmonial</div>
  )
}
