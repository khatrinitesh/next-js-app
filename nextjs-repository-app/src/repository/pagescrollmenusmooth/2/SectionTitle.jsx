import React from 'react'

const SectionTitle = ({title,desc}) => {
  return (
    <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-700">{desc}</p>
    </div>
  )
}

export default SectionTitle