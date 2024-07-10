import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="errorContent h-screen w-full flex align-center flex-col items-center">
        <h2 className="font-bold text-[32px]">404 page not found</h2>
        <Link href="/" className="bg-sky-600 text-white rounded px-10 py-2">GoBack</Link>
    </div>
  )
}

export default NotFound