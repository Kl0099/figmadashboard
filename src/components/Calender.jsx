import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Schedule from "./Schedule";

const Calendars = () => {
  const customShortWeekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const getDayStyle = (date) => {
    // Define your custom styles for each day here
    const dayStyles = {
      // Style the 2nd day
      // Add more styles for other days if needed
    };

    // Return the style for the current day
    return dayStyles[date.getDate()] || ""; // Return empty string if no style is defined
  };

  return (
    <div className="w-[360px] h-[818px] border rounded-[10px] flex flex-col items-center ml-4">
      <Calendar
        value={new Date("2023-05-05")}
        className={` border-none w-[289.97px] h-[303.89px] p-2`}
        calendarType="gregory"
        next2Label
        prev2Label
        calendarHeaderClassName="flex justify-between"
        formatDay={(locale, date) => date.getDate()}
        formatShortWeekday={(locale, date) =>
          ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
        }
        tileClassName={({ date, activeStartDate, view }) => {
          const dayStyle = getDayStyle(date);
          return `font-semibold text-[13px] ${dayStyle}`;
        }}
      />
      {/* schedule  */}
      <Schedule />
    </div>
  );
};

export default Calendars;
