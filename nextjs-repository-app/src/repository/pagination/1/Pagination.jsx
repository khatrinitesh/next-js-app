import React from 'react'

const Pagination = ({totalPages,currentPage,onPageChange}) => {
    // array to store page numbers
    const pageNumbers = Array.from({length:totalPages},(_,index) => index + 1)
  
  return (
    <>
     <div className='pagination'>
        {pageNumbers.map((page) => (
            <button key={page} onClick={() => onPageChange(page)} className={currentPage === page ? 'active' : ''}>{page}</button>
        ))}
     </div>
    </>
  )
}

export default Pagination