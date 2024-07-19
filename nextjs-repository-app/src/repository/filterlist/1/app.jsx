import React, { useState } from 'react';

const CustomApp = () => {

    const data = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
  return (
    <>
      <FilteredList data={data}/>
    </>
  )
}

export default CustomApp

const FilteredList = ({data}) => {
    const [filter,setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const filteredData = data.filter(item =>
        item.toLowerCase().includes(filter.toLowerCase())
      );
    return(
        <>
         <input type="text" value={filter} onChange={handleFilterChange} placeholder='filter items...' />
         <ul>
            {filteredData.map((val,index) => {
                return(
                    <li key={index}>{val}</li>
                )
            })}
         </ul>
        </>
    )
}
