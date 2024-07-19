import React from 'react'

const CustomApp = () => {

    const user = {
        src:'https://i.pinimg.com/736x/87/14/55/8714556a52021ba3a55c8e7a3547d28c.jpg',
        alt:'title',
        size:'96',
    }
  return (
    <>
      <Avatar src={user.src} alt={user.alt} size={user.size}/>
      <div className="ml-4">
        <h2 className="text-lg font-semibold">John Doe</h2>
        <p className="text-gray-500">Software Engineer</p>
      </div>
    </>
  )
}

export default CustomApp

const Avatar = ({src,alt,size}) => {
    return(
        <>
         <img src={src} alt={alt} className={`inline-block h-${size} w-${size} rounded-full`}/>
        </>
    )
}
