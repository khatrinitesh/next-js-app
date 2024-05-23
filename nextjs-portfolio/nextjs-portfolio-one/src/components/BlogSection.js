import React from 'react'
import { blogItems } from '../constants/constants'

const BlogSection = () => {
  return (
    <>
      <div className="flex my-[30px] h-full mx-auto justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 w-full">
          {/* Map over the blogItems array to render each blog item */}
          {blogItems.map(item => (
            <div key={item.id} className="w-full bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
              <img src={item.image} alt="Blog" className="h-48 w-full object-cover" />
              <div className="p-4">
                <time dateTime="2023-03-13" className="text-xs uppercase text-gray-400 font-semibold">
                  {item.date}
                </time>
                <h2 className="my-1 text-2xl font-bold leading-relaxed">{item.title}</h2>
                <p className="text-sm my-2">{item.description}</p>
                <a href="#" className="mt-4 py-2.5 px-6 rounded-full border font-medium text-white bg-defaultgreen hover:bg-hovergreen hover:border hover:border-hovergreen flex justify-center items-center space-x-2 transition duration-300">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BlogSection