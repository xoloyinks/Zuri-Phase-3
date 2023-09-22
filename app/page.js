import Image from 'next/image'
import Gallery from './pages/gallary/page'
import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'


export default function Home() {
  
  return (
    <>
      <section>
        <Gallery />
      </section>
    </>
  )
}
