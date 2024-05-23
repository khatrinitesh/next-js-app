import Banner from "@/components/banner";
import FetchData from "@/components/restfetchdatafromapi/1/app";

const About = () => {
  
  return (
    <div className="mainContent clear-both">
      <Banner bannerStyle='bg-[red]' title="About" desc="Do id tempor laboris laboris sint cillum ad fugiat excepteur cupidatat do adipisicing mollit."/>
      <FetchData/>
    </div>  
  )
}

export default About
