const fetchData=async ()=>{
    const reqData = await fetchData("https://agency.teamrabbil.com/api/HeroList")
    const resData=reqData.json()
    console.log(resData);
   }

export default function HeroSec() {
  return (
    <div>HeroSec</div>
  )
}
