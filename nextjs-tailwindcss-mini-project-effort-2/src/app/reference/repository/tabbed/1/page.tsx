"use client";

import React,{useState} from 'react';
import './style.css';


const CustomApp = () => {
    const array1 = [5, 2, 9, 1];
    const array2 = [7, 4, 8, 3];
    const [dataArray, setDataArray] = useState([
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Bob', age: 28 },
      ]);
    
    const [isAscending, setIsAscending] = useState(true);

    const concatedArray = [...array1,...array2]
    const sortArrAsc = [...concatedArray].sort(function(a,b) {
        if(a<b){
            return -1
        }
        else{
            return 1
        }
    })
    const sortArrDsc = [...concatedArray].sort(function(a,b) {
        if(a>b){
            return -1
        }
        else{
            return 1
        }
    })

    
    const btnSortName = () => {
        setDataArray((prevDataArrayName) =>
          isAscending
            ? [...prevDataArrayName].sort((a, b) => a.name.localeCompare(b.name))
            : [...prevDataArrayName].sort((a, b) => b.name.localeCompare(a.name))
        );
        setIsAscending((prevIsAsc) => !prevIsAsc)
    };

    const btnSortNo = () => {
        setDataArray((prevDataArrayAge) =>
          isAscending
            ? [...prevDataArrayAge].sort((a, b) => a.age - b.age)
            : [...prevDataArrayAge].sort((a, b) => b.age - a.age)
        );
        setIsAscending((prevIsAsc) => !prevIsAsc)
    };

//   const handleSortToggle = () => {
//     setDataArray((prevDataArray) =>
//       isAscending
//         ? [...prevDataArray].sort((a, b) => a.age - b.age)
//         : [...prevDataArray].sort((a, b) => b.age - a.age)
//     );
//     setIsAscending((prevIsAscending) => !prevIsAscending);
//   };
  return (
    <>
      <>
           <p>Original: {concatedArray}</p>
           <p>Sort Asc: {sortArrAsc}</p>
           <p>Sort Dsc: {sortArrDsc}</p>
           {/* <button onClick={handleSortToggle}>
        Sort {isAscending ? 'Descending' : 'Ascending'}
      </button> */}
           <table style={{border:'1px solid red'}}>
                <thead>
                    <tr>
                        <th onClick={btnSortNo}>sr.no.</th>
                        <th onClick={btnSortName}>name</th>
                    </tr>
                </thead>
                <tbody>
                {dataArray.map((val,index) => {
                        const {id,name} = val
                        return( 
                           <tr key={id}>
                                <td>
                                    {id}
                                </td>
                                <td>
                                    {name}
                                </td>
                            </tr>
                            
                        )
                    })}        
                </tbody>
            
           </table>
      </>
    </>
  )
}

export default CustomApp


  
