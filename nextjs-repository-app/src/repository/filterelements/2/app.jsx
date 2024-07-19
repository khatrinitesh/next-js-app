import React, { useState } from 'react';

const app = () => {
    const data = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  return (
    <>
      <FilteredData data={data}/>
    </>
  )
}

export default app

const FilteredData = ({data})=>{
    const [filter,setFilter] = useState('');
    const [filterData,setFilterData] = useState(data);

    
    const handleFilterChange = (e) => {
        const val = e.target.value;
        setFilter(val)
        filteredData(val)
    }
    const filteredData = (val) => {
        const filtered = data.filter(item => item.toLowerCase().includes(val.toLowerCase()))
        setFilterData(filtered)
    }

    const btnDel = (index) => {
        const newData = [...filterData]; // Create a copy of filterData
        newData.splice(index,1) // Remove item at the given index
        setFilterData(newData) // Update filterData state
    }
    return(
        <>
        <input type="text" value={filter} placeholder='filter...' onChange={handleFilterChange} />
        {filterData.map((val,index) => {
            return(
                <div key={index}>{val}
                <button className='bg-black text-white rounded-[50%] flex items-center justify-center w-[30px] h-[30px]' onClick={() => btnDel(index)}>&times;</button>
                </div>
            )
        })}
        </>
    )
}
