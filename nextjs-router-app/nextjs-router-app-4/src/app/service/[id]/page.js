'use client';
import MainLayout from "@/layouts/Layout";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {useState,useEffect} from 'react';

export default function ServiceDetail() {

  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const {id} = useParams();
  const apiurl = 'https://jsonplaceholder.typicode.com/users'

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiurl}/${id}`);
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
  },[id]);

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
      <div className="content p-10 h-full">
        <div className="container mx-auto">
          <h2 className="font-bold text-[32px] mb-5">Service page</h2>
          <Link href="/service" className="bg-cyan-800 text-white px-10 py-2 rounded mb-2 inline-block">Back</Link>
          <br />
          {users.name} - {users.username} - {users.email}
        </div>
      </div>
    </MainLayout>
  );
}
