import React from 'react'

const Banner = ({title,desc,bannerStyle}) => {
  return (
    <div className={`${bannerStyle} bannerContent py-[50px]`}>
      <div className="container mx-auto">
        <h3 className="title font-bold text-Mheadtitle lg:text-Dheadtitle">{title}</h3>
        <p className="text-MDesc md:text-DDesc">{desc}</p>
        </div>
    </div>
  )
}

export default Banner