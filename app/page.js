import Image from 'next/image'
import Gallery from './pages/gallary/page'
import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'


export default function Home() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <Gallery /> : <h1 className='text-4xl'>Page not available for unauthenticated user</h1>
      )}
    </>
  )
}
