import React from 'react';
import { FaAngleRight } from "react-icons/fa";


const CustomApp = () => {

    const breadcrumbs = [
        { label: 'Home', url: '/' },
        { label: 'Category', url: '/category' },
        { label: 'Subcategory', url: '/category/subcategory' },
        { label: 'Current Page', url: '/category/subcategory/page' }
      ];
  return (
    <>
      <Breadcrumbs items={breadcrumbs}/>
    </>
  )
}

export default CustomApp

const Breadcrumbs = ({ items }) => {
    return (
      <nav className="flex justify-between items-center py-4 px-6 bg-gray-100">
        <ol className="list-reset flex text-gray-700">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <a href={item.url} className="text-blue-500 hover:underline">
                {item.label}
              </a>
              {index < items.length - 1 && (
                <FaAngleRight />
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  };