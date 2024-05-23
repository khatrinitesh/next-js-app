'use client'
import Link from 'next/link';
import React,{useState,useEffect} from 'react'

const page = () => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const apiUrl = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl)
                    if(!response.ok){
                        throw new Error(`Sorry something went ${response.status}`)
                    }
                    const result = await response.json();
                    setData(result)
                    console.log(result);
                    setLoading(false)
            } catch (error) {
                console.error(error)
                setError(error.message)
                setLoading(false);
            }
        }
        fetchData();
    },[])

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
    <>
    <div className="grid grid-cols-4 gap-4">
      {data.map(({ id, name, email, username, address, phone, website, company }) => {
        // Destructuring nested objects
        const { street, suite, city, zipcode, geo } = address;
        const { lat, lng } = geo;
        const { name: companyName, catchPhrase, bs } = company;

        return (
            <Link key={id} href={`/product/${id}`}>
                <div className="card shadow dark:bg-cyan-600 bg-emerald-600 p-[10px] rounded-[10px]">
                    <h1 className="text-fs32 text-white font-poppinsSB">{id}</h1>
                    <h3 className="mb-[10px] text-white font-poppinsSB">{name}</h3>
                    <p className="mb-[10px] text-white font-poppinsR">Username: {username}</p>
                    <p className="mb-[10px] text-white font-poppinsR">Email: {email}</p>
                    <p className="mb-[10px] text-white font-poppinsR">Phone: {phone}</p>
                    <p className="mb-[10px] text-white font-poppinsR">Website: {website}</p>
                    <p className="mb-[10px] text-white font-poppinsR">Address: {street}, {suite}, {city}, {zipcode}</p>
                    <p className="mb-[10px] text-white font-poppinsR">Geo: {lat}, {lng}</p>
                    <p className="mb-[10px] text-white font-poppinsR">Company: {companyName}</p>
                    <p className="mb-[10px] text-white font-poppinsR">Catch Phrase: {catchPhrase}</p>
                    <p className="mb-[10px] text-white font-poppinsR">BS: {bs}</p>
                </div>
          </Link>
        );
      })}
      </div>
    </>
  )
}

export default page