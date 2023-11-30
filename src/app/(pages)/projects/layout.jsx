export async function generateMetadata(){
  const res=await fetch("https://agency.teamrabbil.com/api/SiteMeta/projects");
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

export default function Layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}
