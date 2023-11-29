
const fetchData=async ()=>{
    const reqData = await fetchData("https://agency.teamrabbil.com/api/BrandList")
    const resData=reqData.json()
    console.log(resData);
   }

export default function Brands() {
  return (
    <div>Brands</div>
  )
}
