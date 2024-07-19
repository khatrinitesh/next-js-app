import React,{useState} from 'react'

const CustomApp = () => {
    const baseurl = 'https://www.fruityvice.com/api/fruit/all'
    
    const suggestions = [baseurl]
  return (
    <div>
      <AutoComplete suggestions={suggestions}/>
    </div>
  )
}

export default CustomApp

const AutoComplete = ({suggestions}) => {

    const [filteredsugg,setFilterSugg] = useState([]);
    const [inputval,setInputval] = useState('');

    const handleInputChange = (e) => {
        const inputValChange = e.target.value 
        setInputval(inputValChange)
        const filteredSugg = suggestions.filter((val) => val.toLowerCase().includes(inputval.toLowerCase()));
        setFilterSugg(filteredSugg);
    }

    const handleSuggestClick = (suggestion) => {
        setInputval(suggestion)
        setFilterSugg([]);
    }
    return(
        <>
            <div className='relative'>
                <input type="text" className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500' placeholder="type..." onChange={handleInputChange} value={inputval}  />
                <ul className='absolute top-full z-10 w-full bg-white border border-gray-300 rounded-md shadow-md'>
                {filteredsugg.map((val,index) => {
                    return(
                        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" key={index} onClick={() => handleSuggestClick(val)}>{val}</li>
                    )
                })}
                </ul>
            </div>
        </>
    )
}
