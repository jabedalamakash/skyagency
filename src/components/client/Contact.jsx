// const fetchData=async ()=>{
//     const reqData = await fetchData("https://agency.teamrabbil.com/api/CreateContact")
//     const resData=reqData.json()
//     console.log(resData);
//    }
"use client"

export default function Contact() {
  
  return (
      <section className="w-full">
      <main className="w-full md:w-[80%] mx-auto px-5 md:px-0">
      <h5 className="uppercase text-center text-[#20B15A] pb-5 text-xl font-semibold">Subscribe</h5>
      <h1 className="capitalize text-2xl mb-3 text-center">subscribe to get the latest news about us</h1>
      <p className="capitalize pb-10 text-gray-500 text-center">please drop your email below to get daily update what we do</p>
      <div className=" text-center  mx-auto">
      <input type="email" className="p-4 w-1/3  border-2 border-gray-500 rounded-xl" placeholder="Enter Your Email"/>
      <button className="bg-[#F55F1D]  text-center px-3 py-2 z-10 rounded-xl  text-white">Subscribe</button>

      </div>
  
      </main>
      </section>
  )
}
