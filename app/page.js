import InputBox from '@/app/components/InputBox'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import TodoListElement from '@/app/components/TodoListElement'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-center main-container">
          <InputBox/>
          <TodoListElement/>
      </main>
    </>

  )
}
