import { useState } from 'react';
import './style.css';

const CustomApp = () => {
   
  return (
    <>
        <div className="container mx-auto">
            <Accordion title="Section 1">
                Content for Section 1
            </Accordion>
            <Accordion title="Section 2">
                Content for Section 2
            </Accordion>
       </div>
    </>
  )
}

export default CustomApp

const Accordion = ({title,children}) => {
    const {isOpen,btnHandle} = UseAccordion();
    return(
        <>
         <div className={`accordion ${isOpen ? 'active-accordion' : ''}`}>
            <div className="accordion-header flex justify-between items-center border-b cursor-pointer" onClick={btnHandle}>
                <span className="text-lg font-semibold">{title}</span>
                <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className={`accordion-content ${isOpen ? 'block' : 'hidden'}  transition-all duration-300 ease-in-out`}>
                    {children}
                </div>
            )}
        </div>
        </>
    )
}

const UseAccordion = () => {

    const [isOpen,setIsOpen] = useState(false);

    const btnHandle = () => {
        setIsOpen(!isOpen)
    }
    return {isOpen,btnHandle}
}
