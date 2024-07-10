'use client';
import MainLayout from "@/layouts/Layout";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {useState,useEffect} from 'react';

export default function Service() {

  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const apiurl = 'https://jsonplaceholder.typicode.com/users'

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiurl}`);
      if(!response.ok){
        throw new Error(`sorry something went wrong ${response.status}`);
      }
      const result = await response.json();
      setUsers(result);
        console.log(result);
        setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData()
  },[]);

  const directors = [
    { name: 'Director 1', movies: ['Movie 1', 'Movie 2', 'Movie 3'] },
    { name: 'Director 2', movies: ['Movie 4', 'Movie 5', 'Movie 6'] },
    // Add more directors if needed
  ];

  if(error){
    return(
      <div>{error}</div>
    )
  }

  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  return (
    <MainLayout>
      <div className="content p-10">
        <div className="container mx-auto">
          <h2 className="font-bold text-[32px] mb-[10px]">Service page</h2>
          {users.map((val) => (
            <div className="shadow card p-2 rounded mb-10" key={val.id}>
              <Link href={`/service/${val.id}`}>{val.id}</Link>
              <h3>{val.name}</h3>
            </div>
          ))}

          <br />
          {directors.map((val,index) => (
            <div key={index}>
              <h3 className="font-bold">{val.name}</h3>
              {val.movies.map((item,index) => (
                <div key={index} className="ms-4 ">{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
