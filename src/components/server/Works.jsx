import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const fetchData=async ()=>{
    const reqData = await fetch("https://agency.teamrabbil.com/api/WorkList")
    const resData= reqData.json()
    return resData;
    
   }

export default async function Works() {
 const data = await fetchData()
 const imgs = [
   { id: 1, img: "/icons/activity.png",alt: "activity"},
   { id: 2, img: "/icons/heart.png" ,alt: "heart"},
   { id: 3, img: "/icons/work.png",alt: "work"},
 ];
//  console.log(data);
  return (
    <section className="w-full">
    <main className="w-full md:w-[80%] mx-auto px-5 md:px-0">
    <h5 className="uppercase  text-[#20B15A] pb-5 text-xl font-semibold">Worklist</h5>
    <h1 className="capitalize font-bold text-2xl mb-10 ">we provide the perfect solution to your business growth </h1>
    <div className="flex flex-col gap-5 space-y-5 md:space-y-0 md:flex-row md:justify-between">

          <div className="bg-white shadow-xl border  p-10 md:px-20 md:py-10   rounded-xl">
            <Image
              src={"/icons/activity.png"}
              height={100}
              width={100}
              alt={"happy"}
              className="bg-[#D7F5DC] mx-auto rounded-xl mb-5 p-10"
            />
            <p className="text-center sm:text-left text-2xl mb-3   font-bold">
              {data[0].title}
            </p>
            <p className="text-center sm:text-left mb-3 text-gray-500">{data[0].des}</p>

            <div className="inline-flex items-center gap-3">
            <Link href={"/"}>Learn More </Link>
            <FaArrowRightLong /> 
            </div>

          </div>


          <div className="bg-white shadow-xl border  p-10 md:px-20 md:py-10 rounded-xl">
            <Image
              src={"/icons/heart.png"}
              height={100}
              width={100}
              alt={"like"}
              className="bg-[#D7F5DC] mx-auto rounded-xl  mb-5 p-10"
            />
            <p className="text-center sm:text-left text-2xl mb-3  font-bold">
              {data[1].title}
            </p>
            <p className="text-center sm:text-left mb-3 text-gray-500">{data[1].des}</p>

            <div className="inline-flex items-center gap-3">
            <Link href={"/"}>Learn More </Link>
            <FaArrowRightLong /> 
            </div>

          </div>

          <div className="bg-white shadow-xl border  p-10 md:px-20 md:py-10  rounded-xl">
            <Image
              src={"/icons/work.png"}
              height={100}
              width={100}
              alt={"scan"}
              className="bg-[#D7F5DC] mx-auto rounded-xl mb-5  p-10"
            />
            <p className="text-center sm:text-left text-2xl mb-3 font-bold">
              {data[2].title}
            </p>
            <p className=" text-center sm:text-left mb-3 text-gray-500">{data[2].des}</p>
            <div className="inline-flex items-center gap-3">
            <Link href={"/"}>Learn More </Link>
            <FaArrowRightLong /> 
            </div>
            
          </div>
        </div>

    </main>
    </section>
  )
}
