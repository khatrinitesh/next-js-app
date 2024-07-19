import React from 'react'

const CustomApp = () => {
  return (
    <>
        <div className="flex justify-center">
            <nav className="space-x-4">
                <CenteredMenuLink href="/" text="Home"/>
                <CenteredMenuLink href="/about" text="About"/>
                <CenteredMenuLink href="/service" text="Service"/>
                <CenteredMenuLink href="/contact" text="Contact"/>
            </nav>
        </div>
    </>
  )
}

export default CustomApp

const CenteredMenuLink = ({href,text}) => {
    return(
        <>
        <a href={href} className="block text-center py-2 px-4 text-gray-800 hover:bg-gray-200">
            {text}
        </a>
        </>
    )
}