'use client'
import Link from 'next/link';
import React,{useState,useEffect} from 'react'
import { useParams,useRouter } from 'next/navigation';

const page = () => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const {id} = useParams();
    const router = useRouter();

    const btnBack = () => {
        router.push('/product')
    }
    console.log(id);

    const apiUrl = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        setLoading(true)
            const fetchData = async () => {
                try {
                    const response = await fetch(`${apiUrl}/${id}`)
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
            if(id){
                fetchData();
            }
    },[id])

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
        <button onClick={btnBack} className="dark:bg-secondaryD text-white bg-primaryD rounded-[10px] px-[30px] py-[10px]">Back</button>
        <div className="grid grid-cols-4 gap-4">
        <div className=" card shadow p-[10px] border dark:border-white border-primaryD rounded-[10px] my-[10px]">
            <h3 className="dark:text-white text-primaryD">{data.id}</h3>
            <h3 className="dark:text-white text-primaryD">{data.name}</h3>
            <p className="dark:text-white text-primaryD">{data.username}</p>
            <p className="dark:text-white text-primaryD">{data.email}</p>
            <p className="dark:text-white text-primaryD">{data?.address?.street}</p>
            <p className="dark:text-white text-primaryD">{data?.address?.suite}</p>
            <p className="dark:text-white text-primaryD">{data?.address?.city}</p>
            <p className="dark:text-white text-primaryD">{data?.address?.zipcode}</p>
            <p className="dark:text-white text-primaryD">{data?.geo?.lat}</p>
            <p className="dark:text-white text-primaryD">{data?.geo?.lng}</p>
        </div>
        </div>
    </>
  )
}

export default page