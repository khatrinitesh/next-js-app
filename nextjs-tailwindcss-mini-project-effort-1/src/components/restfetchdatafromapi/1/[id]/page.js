"use client"
import {useState,useEffect} from 'react';

const FetchDataDetail = () => {
    const [listdata,setListdata] = useState([]);

    const baseurl = 'https://api.spacexdata.com/v3/capsules/past/'

    const fetchData = async () => {
        if(id){
            try{
                const response = await fetch(`${baseurl}`)
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
    },[id]) // dependary
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

export default FetchDataDetail
