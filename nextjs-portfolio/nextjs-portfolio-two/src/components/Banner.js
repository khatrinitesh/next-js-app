import React from 'react'

const Banner = ({bannerStyle,bannerTitle,bannerDesc}) => {
  return (
    <div className={`${bannerStyle} bannerContent py-[50px]`}>
      <div className="container mx-auto">
        <h3 className="font-monsterratB">{bannerTitle}</h3>
        <p>{bannerDesc}</p>
        </div>
    </div>
  )
}

export default Banner