import React, { useState } from 'react';

const CustomApp = () => {
    const data = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  return (
    <>
      <FilteredList data={data}/>
    </>
  )
}

export default CustomApp

const FilteredList = ({data}) => {

    const [filter,setFilter] = useState('');
    const [filteredData,setFilteredData] = useState(data);

    const filterData = (val) => {
        const filtered = data.filter(item => item.toLowerCase().includes(val.toLowerCase())
        );
        setFilteredData(filtered);
    }

    const handleFilterChange  =(e) => {
        const val = e.target.value;
        setFilter(val)
        filterData(val)
    }
    return(
        <>
         <input type="text" value={filter} onChange={handleFilterChange} placeholder='filter...' />
         {filteredData.map((val,index) => {
            return(
                <div key={index}>
                    {val}
                </div>
            )
         })}
        </>
    )
}
