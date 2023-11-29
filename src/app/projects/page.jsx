import Contact from '@/components/client/Contact'
import AllProjects from '@/components/server/AllProjects'
import Brands from '@/components/server/Brands'
import React from 'react'

export default function page() {
  return (
    <main>
    <AllProjects/>
    <Brands/>
    <Contact/>
    </main>
  )
}
