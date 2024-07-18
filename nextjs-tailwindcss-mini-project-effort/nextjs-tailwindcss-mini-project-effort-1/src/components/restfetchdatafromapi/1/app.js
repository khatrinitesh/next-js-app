"use client"
import {useState,useEffect} from 'react';
import Link from 'next/link';

const FetchData = () => {
    const [listdata,setListdata] = useState([]);

    const baseurl = 'https://api.spacexdata.com/v3/capsules/past/'

    const fetchData = async () => {
        try{
            const response = await fetch(baseurl)
            const result = await response.json()
            console.log(result);
            setListdata(result)
        }
        catch(error){
            console.error('Error',error)
        }
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    
    <div className="grid grid-cols-2">
      {listdata.map((val,index) => {
        const {capsule_serial } = val
        return(
            <>
              <Link key={index} href={`/1/${capsule_serial}`}>View</Link>  
            </>
        )
      })}
    </div>
  )
}

export default FetchData
