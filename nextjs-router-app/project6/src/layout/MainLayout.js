// COMPONENTS
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const MainLayout = ({children}) => {
  return (
    <>
    {/* START HEADER */}
    <Header/>
    {/* END HEADER */}
    
    {/* START MAIN CONTENT */}
    <div className="mainContent grow">
        {children}
    </div>
    {/* END MAIN CONTENT */}

    {/* START FOOTER */}
    <Footer/>
    {/* END FOOTER */}
    </>
  )
}

export default MainLayout