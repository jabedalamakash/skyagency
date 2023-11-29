import Contact from '@/components/client/Contact'
import Testmonial from '@/components/server/Testmonial'
import Works from '@/components/server/Works'

export default  function page() {
  return (
    <main>
        <Testmonial/>
        <Works/>
        <Contact/>
    </main>
  )
}
