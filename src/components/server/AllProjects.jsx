const fetchData=async ()=>{
    const reqData = await fetchData("https://agency.teamrabbil.com/api/AllProject")
    const resData=reqData.json()
    console.log(resData);
   }
export default function AllProjects() {
  return (
    <div>AllProjects</div>
  )
}
