import React from 'react';

const Banner = ({bannerStyle,bannerTitle,bannerDesc}) => {
  return (
    <div className={`${bannerStyle}`}>
      <h3 className={`${bannerTitle}`}>{bannerTitle}</h3>
      <p className={`${bannerDesc}`}>{bannerDesc}</p>
    </div>
  )
}

export default Banner
