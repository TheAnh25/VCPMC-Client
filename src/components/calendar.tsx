import React from "react";
import Fullcalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import "../sass/calendar.scss";

const CalendarComponent: React.FC = () => {
  return (
    <div className="w-[1154px] border-collapse border-none text-white px-4 py-4">
      <Fullcalendar
        plugins={[timeGridPlugin]}
        headerToolbar={{
          start: "prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "timeGridWeek", // will normally be on the right. if RTL, will be on the left
        }}
        height={"50vh"}
      />
    </div>
  );
};

export default CalendarComponent;
