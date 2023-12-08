// "use client"

import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
  const navList=[
    {id:1,title:"Home",path:"/"},
    {id:2,title:"Team",path:"/team"},
    {id:3,title:"Service",path:"/service"},
    {id:4,title:"Projects",path:"/projects"},
    {id:5,title:"Testimonials",path:"/testimonials"}
  ]
  return (
    <section className="w-full bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 fixed top-0 z-50">

      <main className="flex flex-col flex-wrap md:flex-row items-center justify-between py-20 w-full md:w-[80%] mx-auto">

     <div className="pb-5 md:pb-0">
      <Link href={"/"}>
      {/* <Image src={"/logo.png"}
      height={100}
      width={100}
      className="w-52"
      alt="logo" /> */}
      <h1 className='font-bold text-3xl text-black'>Sky<span className='text-[#F0682A]'>Agency</span></h1>
      </Link>
     </div>
   <div className="flex justify-center flex-wrap md:flex-nowrap  gap-5 items-center">
      {
        navList.map((item)=>{
          return <nav key={item.id}>
            <Link href={item.path} className="text-black font-semibold">{item.title}</Link>
          </nav>

        })
      }
        <div className="flex gap-5">
        <button className="px-3 py-2 border bg-transparent rounded-md font-semibold border-[#20B15A]">Log in</button>
        <button className="px-3 py-2 bg-[#20B15A] border font-semibold text-white border-[#20B15A] rounded-md">Register</button>
      </div>
      </div>

      </main>
    </section>
  )
}
