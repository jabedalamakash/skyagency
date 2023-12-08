import React from 'react'
import Sociallink from './Sociallink'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <section className='bg-[#000000] '>
      <footer className='w-full px-5 md:px-0 md:w-[80%] mx-auto py-20  '>
      <main className='flex flex-col md:space-x-12 md:flex-row justify-between'>
      <div className='py-5 w-full md:w-[50%] md:py-0'>
        {/* <Image
        src={"/logo.png"}
        height={100}
        width={100}
        alt="logo"
        className='w-52 py-5 z-10'/> */}
        <h1 className='font-bold text-3xl text-white'>Design<span className='text-[#F0682A]'>Agency</span></h1>
        <p className=' py-5 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ipsam doloribus, voluptate inventore vel tenetur ducimus.</p>
      <Sociallink/>
      </div>
      <div className='flex flex-col w-full md:w-[40%] text-white space-y-4'>
        <h1 className='font-bold text-xl'>Quick Links</h1>
        <Link href={"/service"}>Services</Link>
        <Link href={"/team"}>Portfolio</Link>
        <Link href={"/testimonials"}>About Us</Link>
        <Link href={"/"}>Contact Us</Link>
      </div>
      <div className='py-5 md:py-0 space-y-4 w-full md:w-[40%]'>
        <h1 className='font-bold text-white text-xl'>Address</h1>
        <p className=' text-white'>Design Agency Head Office,Airport Road, United Arab Emirates</p>
      </div>

      </main>
      <p className='py-5 text-white'>Copyright Design Agency 2023-24</p>

      </footer>
      </section>
  )
}
