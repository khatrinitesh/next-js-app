"use client"
import {useState,useEffect} from 'react';

const FetchData = () => {
    const [listdata,setListdata] = useState([]);

    const baseurl = 'https://www.themealdb.com/api/json/v1/1/categories.php'

    const fetchData = async () => {
        if(idCategory){
            try{
                const response = await fetch(`${baseurl}/${idCategory}`)
                const result = await response.json()
                console.log(result);
                setListdata(result.categories)
            }
            catch(error){
                console.error('Error',error)
            }
        }
    }

    useEffect(() => {
        fetchData()
    },[idCategory])
  return (
    
    <div className="grid grid-cols-2">
      {listdata.map((val,index) => {
        const {idCategory,strCategory,strCategoryDescription,strCategoryThumb} = val
        return(
            <div className="flex items-center justify-center flex-col " key={index}>
                <h3 className="text-[red] text-[30px]">{idCategory}</h3>
                <h3 className="text-[blue] text-[30px]">{strCategory}</h3>
                <h3 className="text-[green] text-[30px]">{strCategoryDescription}</h3>
                <img src={strCategoryThumb}/>
            </div>
        )
      })}
    </div>
  )
}

export default FetchData
