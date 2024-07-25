import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({children}) => {
  return (
    <>
    <Header/>
    <div className="mainContent h-screen grow">
      <div className="container mx-auto">
        {children}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default MainLayout