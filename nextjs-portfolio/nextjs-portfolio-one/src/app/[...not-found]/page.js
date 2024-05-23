import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h2 className="dark:text-white text-primaryD font-bold font-poppinsSB text-fs24">Not Found</h2>
      <p className="text-red">Could not find requested resource</p>
      <Link href="/" className="bg-cyan-700 text-white px-[30px] py-[10px] rounded-[10px] inline-block">Return Home</Link>
    </div>
  )
}