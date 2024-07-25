import React from 'react'

const Banner = ({title,desc}) => {
  return (
    <div className="bannerContent py-[100px]">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
    </div>
  )
}

export default Banner