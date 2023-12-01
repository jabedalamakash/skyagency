import Image from "next/image";

const fetchData=async ()=>{
    const reqData = await fetch("https://agency.teamrabbil.com/api/BrandList")
    const resData=await reqData.json()
    return resData;
    console.log(resData);
   }

export default async function Brands() {
  const data= await fetchData()
  // console.log(data);

  return (
    <section className="w-full bg-white py-10 md:py-20">
    <main className="w-full md:w-[80%] mx-auto px-5 md:px-0">

      <div className="flex flex-col md:justify-between md:flex-row items-center ">
        {data.map((item)=>{
          return <div key={item.id}>
            <div className="">
               <Image
              src={item.image}
              height={100}
              width={100}
              alt={item.name}
              className="w-full p-5 md:p-0 h-full"
            />
            </div>

          </div>
        })}
      </div>
      </main>
      </section>
  )
}
