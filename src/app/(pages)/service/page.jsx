import BreakCrumb from "@/components/client/BreakCrumb";
import Contact from "@/components/client/Contact";
import Services from "@/components/server/Services";


export default function page() {
  return (
    <main>
    <BreakCrumb title="Service"/>
    <Services/>
    <Contact/>
    </main>
  )
}
