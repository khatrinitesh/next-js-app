"use client"
import BtnPrimary from '@/components/BtnPrimary'
import Banner from '@/layout/Banner'
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {

    const router = useRouter();

    const handleClick = () => {
      router.push("/");
    }
  return (
    <div className="errorContent h-full text-center bg-cyan-300 flex items-center justify-center flex-col">
        <Banner title="Not found page" desc="Dolore est qui cillum ex ut magna in in anim sit esse."/>
        <BtnPrimary onClick={handleClick} label="Return homepage"/>
    </div>
  )
}

export default NotFound