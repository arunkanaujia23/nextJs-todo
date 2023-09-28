import InputBox from '@/components/InputBox'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-center main-container">
          <InputBox/>
      </main>
    </>

  )
}
