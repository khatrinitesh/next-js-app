import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const CustomApp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Datepicker/>
    </div>
  )
}

export default CustomApp

const Datepicker = () => {
    const [startDate, setStartDate]  = useState();
    // Get today's date
    const today = new Date();

    return(
        <>
         <div className='w-64'>
         <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select a date"
        className="block w-full px-4 py-2 mt-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" minDate={today} showYearDropdown  scrollableYearDropdown  showTimeSelect
        timeFormat="HH:mm" isClearable
      />
         </div>
        </>
    )
}
