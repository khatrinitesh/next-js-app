"use client"
import Banner from '@/layout/Banner'
import MainLayout from '@/layout/MainLayout'
import Link from 'next/link'
import { useState ,useEffect} from 'react'

const Service = () => {
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const apiurl = process.env.NEXT_PUBLIC_API1

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiurl)
      if(!response.ok){
        throw new Error('sorry something went wrong')
      }
      const final = await response.json();
      setPosts(final)
      setLoading(false);
      console.log(final);
    } catch (error) {
      console.error(error.message)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  },[]);

  return (
    <MainLayout>
        <div className="content">
            <Banner title="Service" desc="Proident consequat ut ullamco duis in id aliqua elit eu quis commodo eu veniam commodo."/>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {posts.length > 0 && (
              <>
              {posts.map((val) => (
                <div key={val.id} className="shadow p-5 mb-5">
                  <Link href={`/service/${val.id}`}>{val.id}</Link>
                  <h3 className="hadTitle font-bold">{val.title}</h3>
                  <p className="desc">{val.body}</p>
                </div>
              ))}
              </>
            )}
        </div>
    </MainLayout>
  )
}

export default Service