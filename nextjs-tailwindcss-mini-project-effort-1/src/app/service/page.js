"use client"
import Banner from "@/components/banner";
import Link from "next/link";
import { useState,useEffect } from "react";

const Service = () => {
  const [loading,setLoading] = useState(false);
  const [dataPexels,setDataPexels]= useState([]);
  // const [quote,setQuote]= useState([]);

  // const baseurlQuote = 'https://api.adviceslip.com/advice'
  const baseurlPexels = 'https://api.pexels.com/v1/search?query=people';
  const token = 'A6klweMzmOZwMlZn0udDwPKQ0h6G1yOAZQ3bFpSoIVFMtkwumW27FSxc'
  
  useEffect(() => {

    // s > api data 1
    const fetchDataPexels = async () => {
      setLoading(true);
      try{
        const response = await fetch(`${baseurlPexels}`,{
          headers: {
            Authorization: `${token}`,
          },
        })
        const result = await response.json()
        setDataPexels(result.photos)
        console.log(result)
      }
      catch(error){
        console.log('Error',error)
      }
      finally{
        setLoading(false)
      }
    }
    fetchDataPexels()
    // e > api data 1

    // s > api quote 2
    // const fetchDataQuote = async () => {
    //   setLoading(true);
    //   try{
    //     const response = await fetch(`${baseurlQuote}`)
    //     const result = await response.json()
    //     setQuote(result.slip)
    //     console.log(result)
    //   }
    //   catch(error){
    //     console.log('Error',error)
    //   }
    //   finally{
    //     setLoading(false)
    //   }
    // }
    // e > api quote 2
  
    // fetchDataQuote()
  },[token])

  if(loading){
    return(
      <div>loading...</div>
    )
  }
  return (
    <div>
      <Banner bannerStyle='bg-[red]' title="Service" desc="Do id tempor laboris laboris sint cillum ad fugiat excepteur cupidatat do adipisicing mollit."/>
      {dataPexels.map((val,index) => {
        const {id,height,width} = val
        return(
          <div key={index}>
            <h3> width: {width} - height: {height}</h3>
            <Link href={`/services/${id}`} target="_blank">View details</Link>
          </div>
        )
      })}
      {/* <h3>{quote.id} - {quote.advice}</h3> */}
    </div>
  )
}

export default Service
