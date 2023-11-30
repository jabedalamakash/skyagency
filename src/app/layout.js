import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/client/NavBar'
import Footer from '@/components/server/Footer'


const poppins = Poppins({ subsets: ['latin'], 
weight:['100','200','300' ,"400",'500','600','700','800', '900'],
})

export async function generateMetadata(){
  const res=await fetch("https://agency.teamrabbil.com/api/SiteMeta/home");
  const data=await res.json();
  // console.log(data)
  return{
      title:data[0]['title'],
      description:data[0]['description'],
      keywords:data[0]['keywords'],
      openGraph: {
          images: data[0]['image'],
      },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
