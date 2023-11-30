import Contact from '@/components/client/Contact'
import Brands from '@/components/server/Brands'
import Featured from '@/components/server/Featured'
import HeroSec from '@/components/server/HeroSec'
import Stats from '@/components/server/Stats'
import Works from '@/components/server/Works'

export default function Home() {
  return (
  <main>
    <HeroSec/>  
    {/* <Brands/>  */}
     
    <Works/>
    <Stats/>
    <Featured/>
    <Contact/>
    
    
  </main>
  )
}
