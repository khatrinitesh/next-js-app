

const Banner = ({bannerStyle,title,desc}) => {
  return (
    <div className={`${bannerStyle}`}>
      <h3 className="font-bold text-[white] text-[30px]">{title}</h3>
      <p className="font-normal text-[white] text-[16px] mb-[20px]">{desc}</p>
    </div>
  )
}

export default Banner
