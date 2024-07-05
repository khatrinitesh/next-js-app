'use client';
import {useState,useEffect } from 'react';
// components 
import Banner from '@/components/Banner'
// layout
import MainLayout from '@/layout/MainLayout';

const ServicePage = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError]= useState('');
  const apiUrl = process.env.NEXT_PUBLIC_APIURL

  useEffect(() => {
    const fetchData  = async () => {
      try {
        setLoading(true)
        const response = await fetch(apiUrl)
        if(!response.ok){
          throw new Error('sorry something went wrong')
        }
        const finalData = await response.json();
        setData(finalData)
        console.log(finalData)
      } catch (error) {
        setError(error.message)
      }
      finally{
        setLoading(false)
      }
    }
    fetchData();
  },[]);

  return (
    <MainLayout>
        <Banner bannerStyle="bg-cyan-500" title="Service page" desc="Enim velit est labore voluptate amet laboris ex qui eu pariatur deserunt aliqua ullamco cillum."/>
        {loading && <div>Loading...</div>}
        {error && <div><strong>Error:</strong> <em>{error}</em></div>}
        {data && (
      <div className="container mx-auto">
        {data.map((val) => (
          <div key={val.id}>
            <h3>{val.title}</h3>
          </div>
        ))}
      </div>
    )}
    </MainLayout>
  )
}

export default ServicePage