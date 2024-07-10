"use client"
import Banner from '@/components/Banner'
import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {

    const router = useRouter();

    const btnBack = () => {
        router.push('/')
    }
  return (
    <div className="content">
        <Banner bannerStyle="bg-[red] text-white" bannerTitle="NotFound" bannerDesc="Irure proident voluptate fugiat commodo cillum do voluptate sunt eu fugiat nulla ea quis consectetur."/>
        <button onClick={btnBack}>Go Back</button>
    </div>
  )
}

export default NotFound