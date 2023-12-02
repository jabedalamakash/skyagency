"use client"

import Link from "next/link";
import { usePathname} from "next/navigation"

export default function BreakCrumb({title}) {
 const path=usePathname();

  return (
    <section className="w-full bg-[#F8F9FC] mt-48 md:mt-32 ">
        <main className="w-full md:w-[80%] mx-auto px-5 md:px-0 py-20">
        <h1 className="font-semibold text-2xl mb-5">{title}</h1>    
        <div aria-label="breadcrumb" className=" inline-flex items-center " >

            
            <Link href={"/"}>Home</Link>
            <svg
            className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path d="m9 18 6-6-6-6" />
            </svg>
            <Link href={path} className="text-[#20B15A] ">{title}</Link>
            
            

        </div>
        </main>  
    </section>
  )
}
