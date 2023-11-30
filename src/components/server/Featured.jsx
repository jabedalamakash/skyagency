const fetchData=async ()=>{
    const reqData = await fetch("https://agency.teamrabbil.com/api/FeaturedProject")
    const resData=reqData.json()
    console.log(resData);
   }
export default async function Featured() {
  const data= await fetchData()
  return (
    <section className="w-full">
    <main className="w-full md:w-[80%] mx-auto px-5 md:px-0">
    <h5 className="uppercase  text-[#20B15A] pb-5 text-xl font-semibold">Worklist</h5>
    <h1 className="capitalize font-bold text-2xl mb-10 ">we provide the perfect solution to your business growth </h1>
    <div>
      {data.map(()=>{
        return <div>

        </div>
      })}
    </div>
    </main>
    </section>
  )
}
