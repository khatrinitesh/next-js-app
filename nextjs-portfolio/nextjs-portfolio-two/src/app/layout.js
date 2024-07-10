"use client"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useState,useEffect  } from "react";
import Loading from "@/components/Loading";
import { Html } from "next/document";


export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <html>
       <Head>
        <title>Home | Your Website</title>
        <meta name="description" content="Description for the home page." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>
      <body className="h-full flex flex-col font-monsterratR text-fs16">
        <Header/>
        <div className="mainContent flex-grow bg-[#f8f8f8]">
          {loading ? <><Loading/></> : children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}
