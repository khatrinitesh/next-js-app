"use client"

import Banner from "@/components/banner";
import { useRouter } from "next/navigation";

const NotFound = () => {

  const router = useRouter();

  const btnBack = () => {
    router.push('/');
  }

  return (
    <div className="errorContent h-screen bg-[red] text-center items-center flex flex-col justify-center">
      <Banner bannerStyle='w-full' title="404 page not found" desc="Do id tempor laboris laboris sint cillum ad fugiat excepteur cupidatat do adipisicing mollit."/>
      <button onClick={btnBack} className="bg-blue-300 px-[10px] py-[5px] rounded-[20px] font-bold">GO HOME</button>
    </div>
  )
}

export default NotFound
