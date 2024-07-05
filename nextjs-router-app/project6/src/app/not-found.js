'use client';
// NEXT WITH NAVIGATION 
import { useRouter } from 'next/navigation'

const NotFoundPage = () => {

    const router = useRouter();

    const btnBack =() => {
        router.push('/');
    }
  return (
    <div className="flex items-center justify-center h-full flex-col gap-10">
        <h2 className="font-bold text-[32px]">Not Found Page</h2>
        <button className="bg-black text-white rounded px-10 py-2" onClick={btnBack}>Go Back</button>
    </div>
  )
}

export default NotFoundPage