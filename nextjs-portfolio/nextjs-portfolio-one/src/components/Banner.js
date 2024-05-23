import React from 'react'

const Banner = ({title,desc,styleBanner}) => {
  return (
    <div className={`${styleBanner} bannerContent`}>
        <h3 className='dark:text-white text-primaryD font-bold font-poppinsSB text-fs24 mb-2'>{title}</h3>
        <p className='dark:text-white text-primaryD font-poppinsR text-fs18'>{desc}</p>
    </div>
  )
}

export default Banner