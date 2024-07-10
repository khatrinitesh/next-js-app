"use client"
import Banner from '@/components/Banner'
import Link from 'next/link'
import React from 'react'
import { useState,useEffect } from 'react'

const ProductList = () => {
  const baseurl = 'https://jsonplaceholder.typicode.com/users'
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(baseurl)
      if(!response.ok){
        throw new Error(`Sorry, something went wrong. Error: ${response.status}`)
      }
      const jsonData = await response.json()
      setData(jsonData)
      setLoading(false)
      console.log(jsonData);
    } catch (error) {
      setError(error.message)
      setLoading(false)
    } 
  }

  useEffect(() => {
    fetchData()
  },[])

  const handleDel = (id) => {
    const newData = data.filter((val) => val.id !== id);
    setData(newData);
  };

  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  if(error){
    return(
      <div>{error}</div>
    )
  }
  return (
    <div className="content bg-gray-100 py-8">
  <Banner bannerStyle="bg-red-500 text-white" bannerTitle="Product List" bannerDesc="Irure proident voluptate fugiat commodo cillum do voluptate sunt eu fugiat nulla ea quis consectetur." />
  <div className="container mx-auto mt-8">
    <h2 className="text-fs30 font-monsterratB mb-4">Product List</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((val) => (
        <Link href={`/productlist/${val.id}`} key={val.id}>
          <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-xl font-monsterratB">{val.name}</h3>
            <p className="text-gray-500">{val.username}</p>
            <button onClick={() => handleDel(val.id)}>Delete</button>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>
  )
}

export default ProductList