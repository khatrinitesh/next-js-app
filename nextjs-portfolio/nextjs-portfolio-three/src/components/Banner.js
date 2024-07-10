import React from 'react'

const Banner = ({title,desc,bannerStyle}) => {
  return (
    <div className={`${bannerStyle} bannerContent bg-primaryLight text-textLight dark:bg-primaryDark dark:text-textDark py-[50px] px-[20px]`}>
      <div className="container mx-auto">
        <h3 className="fs32">{title}</h3>
        <p className="fs16">{desc}</p>
        </div>
    </div>
  )
}

export default Banner