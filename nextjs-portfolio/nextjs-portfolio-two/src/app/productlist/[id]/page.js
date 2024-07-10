
import Banner from '@/components/Banner'
import Link from 'next/link'

async function fetchProduct(id) {
  const baseurl = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(`${baseurl}/${id}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`)
  }
  return response.json()
}

export async function generateStaticParams() {
  const baseurl = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(baseurl)
  const data = await response.json()

  return data.map((user) => ({
    id: user.id.toString(),
  }))
}

export default async function ProductDetail({ params }) {
  const product = await fetchProduct(params.id)

  return (
    <div className="content bg-gray-100 py-8">
      <Banner bannerStyle="bg-red-500 text-white" bannerTitle="Product Detail" bannerDesc="Irure proident voluptate fugiat commodo cillum do voluptate sunt eu fugiat nulla ea quis consectetur." />
      <div className="container mx-auto mt-8">
        <Link href="/productlist">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go Back</button>
        </Link>
        <h2 className="text-fs30 font-monsterratB my-4">Product Detail</h2>
        <div className="bg-white p-6 shadow-md rounded-md">
          <p className="text-fs30 font-monsterratB">{product.name}</p>
          <p className="text-gray-500">Username: {product.username}</p>
        </div>
      </div>
    </div>
  )
}