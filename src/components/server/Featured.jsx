const fetchData=async ()=>{
    const reqData = await fetchData("https://agency.teamrabbil.com/api/FeaturedProject")
    const resData=reqData.json()
    console.log(resData);
   }
export default function Featured() {
  return (
    <div>Featured</div>
  )
}
