
const fetchData=async ()=>{
    const reqData = await fetch("https://agency.teamrabbil.com/api/BrandList")
    const resData=reqData.json()
    return resData;
    console.log(resData);
   }

export default function Brands() {
  return (
    <div>Brands</div>
  )
}
