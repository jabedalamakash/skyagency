import Image from "next/image";
import Link from "next/link";


export default async function Sociallink() {

  const socialList=[
    {id:1,name:"facebook",link:"https://www.facebook.com",img:"/social/facebook.png"},
    {id:2,name:"twitter",link:"https://www.twitter.com",img:"/social/twitter.png"},
    {id:3,name:"linkedin",link:"https://www.linkedin.com",img:"/social/linkedin.png"},
    {id:4,name:"insta",link:"https://www.instagram.com",img:"/social/insta.png"},
  ]
  return (
    <section>


      <div className="flex gap-5">


      {socialList.map((item)=>{
        return <div key={item.id}>
          <Link target="_blank" href={item.link}>
            <Image
            src={item.img}
            height={100}
            width={100}
            className="w-10"
            alt={item.name}/>
          
          </Link>
        </div>
      })}
      </div>
    </section>
  )
}