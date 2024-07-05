"use client"
import {useState ,useEffect } from 'react';
import Banner from "@/components/Banner";
import MainLayout from "@/layout/MainLayout";
import SplashPage from './splash/page';

export default function Home() {
    const [showPreloader, setShowPreloader] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 1000); // Adjust this time to match your desired loading time (in milliseconds)
  
      return () => clearTimeout(timer); // Clean up timer on component unmount
    }, []); // Empty dependency array ensures this effect runs only once

    

  return (
    <>
    
     <MainLayout>
       <Banner bannerStyle="bg-cyan-500" title="Home page" desc="Qui proident sit dolor magna elit laborum magna cupidatat id aliquip cupidatat laboris."/>
       {showPreloader && (
        <div className="preloader">
          <SplashPage/>
          {/* Add your preloader animation or graphic here */}
        </div>
      )}
       {!showPreloader && (
        <div className="main-content">
          <h1>Welcome to My App!</h1>
        </div>
      )}
      </MainLayout>
    </>
  );
}
