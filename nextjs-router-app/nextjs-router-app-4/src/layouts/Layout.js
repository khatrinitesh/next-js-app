import Footer from "@/components/Footer"
import Header from "@/components/Header"


const MainLayout = ({children}) => {
  return (
    <div className="flex flex-col h-screen bg-[red]">
    <Header/>
    <div className="h-screen mainContent grow">
        {children}
    </div>
    <Footer/>
    </div>
  )
}

export default MainLayout