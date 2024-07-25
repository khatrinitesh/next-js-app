'use client'
import {useState} from 'react';
import { poppins } from '@/fonts/FontFace';
import Banner from '@/layout/Banner'
import MainLayout from '@/layout/MainLayout'

const About = () => {
  
  const [count,setCount] = useState(0)

  function handleClick(){
      setCount(c => c + 1)
  }
  return (
    <MainLayout>
      <Banner title="About" desc="Occaecat duis eiusmod deserunt magna dolor ex dolore et."/>
      
      <h2 className={`${poppins.variable}`}>HeadTitle</h2>
      <h1>{count} times</h1>
      <button onClick={handleClick}>+</button>
    </MainLayout>
  )
}

export default About