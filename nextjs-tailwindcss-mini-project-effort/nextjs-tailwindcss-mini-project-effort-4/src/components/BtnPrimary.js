"use client"

const BtnPrimary = ({label,onClick}) => {
  return (
    <>
     <button onClick={onClick} className="bg-sky-500 text-white rounded px-5 py-2">{label}</button>
    </>
  )
}

export default BtnPrimary