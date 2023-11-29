const fetchData=async ()=>{
    const reqData = await fetchData("https://agency.teamrabbil.com/api/WorkList")
    const resData=reqData.json()
    console.log(resData);
   }

export default function Works() {
  return (
    <div>Works</div>
  )
}
