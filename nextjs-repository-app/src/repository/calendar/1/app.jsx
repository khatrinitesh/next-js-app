import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <Calendar />
    </>
  );
};

export default CustomApp;

const Calendar = () => {
  // get current date
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);

  //function to move to the previous month
  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  // function to move to the next month
  const nxtMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  // function to render days of the month
  const renderDays = () => {
    const firstDayofMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const days = [];

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
      days.push(
        <div
          key={i}
          className="bg-gray-100 p-2 border border-gray-200 rounded-md text-center"
        >
          {i}
        </div>
      );
    }

    // add empty placeholders for days before the 1st day of the month
    for (let i = 0; i < firstDayofMonth.getDay(); i++) {
      days.unshift(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    return days;
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="calendar">
          <div className="header flex items-center justify-between">
            <button
              className="px-2 py-1 border border-gray-200 rounded-md"
              onClick={prevMonth}
            >
              Previous
            </button>
            <h2 className="text-lg font-semibold">
              {date.toLocaleString("default", { month: "long" })}{" "}
              {date.getFullYear()}
            </h2>
            <button
              className="px-2 py-1 border border-gray-200 rounded-md"
              onClick={nxtMonth}
            >
              Next
            </button>
          </div>
          <div className="days gap-2 mt-4">
            <div className="grid grid-cols-7 day-labels text-center font-semibold">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="grid grid-cols-7">{renderDays()}</div>
          </div>
        </div>
      </div>
    </>
  );
};
