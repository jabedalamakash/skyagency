import Image from "next/image"
import Link from "next/link";

const fetchData=async ()=>{
    const reqData = await fetch("https://agency.teamrabbil.com/api/FeaturedProject")
    const resData= await reqData.json()
    // console.log(resData);
    return resData;
   }
export default async function Featured() {
  const data = await fetchData()
  return (
    <section className="w-full py-20 bg-[#F0FDF4]">
    <main className="w-full md:w-[80%] mx-auto px-5 md:px-0">
    <h5 className="uppercase  text-[#20B15A] pb-5 text-xl font-semibold">featured project</h5>
    <h1 className="capitalize font-bold text-2xl mb-10 ">we provide the perfect solution to your business growth </h1>

    <div className="grid grid-cols-1 md:gap-10 md:grid-cols-3">
      {data.map((item)=>{
        return <div key={item.id}>
          <div className="mb-10 md:mb-0">

         
          <Image
                    src={item.image}
                    alt={item.title}
                    height={500}
                    width={500}
                    priority
                    className=" w-full rounded-xl mb-5 h-full"
                  />
                  
                  <div className="inline-flex items-center mb-3 gap-4">
                  <p className="uppercase text-gray-500">{item.remark} -</p>
                  <p className="text-gray-500">June 20, 2022</p>
                  </div>
                  <Link target="_blank" href={item.live}>
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  </Link>

          </div>


        </div>
      })}
    </div>
    </main>
    </section>
  )
}
