"use client"
import BtnPrimary from '@/components/BtnPrimary'
import Banner from '@/layout/Banner'
import MainLayout from '@/layout/MainLayout'
import { useParams, useRouter } from 'next/navigation'
import { useState ,useEffect} from 'react'

const ServiceDetail = () => {
  const [posts,setPosts] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  const apiurl = process.env.NEXT_PUBLIC_API1
  const {id} = useParams();
  console.log(id)

  const fetchData = async () => {
    if(id){
        setLoading(true);
        try {
            const response = await fetch(`${apiurl}/${id}`)
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
    }

    const router = useRouter();

    const handleBack = () => {
        router.push('/service')
    }

  useEffect(() => {
    fetchData()
  },[id]);

  return (
    <MainLayout>
        <div className="content">
            <Banner title="Service Detail" desc="Proident consequat ut ullamco duis in id aliqua elit eu quis commodo eu veniam commodo."/>
            <BtnPrimary onClick={handleBack} label="Back"/>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {posts && (
                <>
                {posts.id} - {posts.title}
                </>
            )}
        </div>
    </MainLayout>
  )
}

export default ServiceDetail