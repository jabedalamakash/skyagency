import BreakCrumb from "@/components/client/BreakCrumb";
import Contact from "@/components/client/Contact";
import Teamlist from "@/components/server/Teamlist";

export default function page() {
  return (
    <main>
    <BreakCrumb title="Team"/>
    <Teamlist/>
    <Contact/>
    </main>
  )
}
