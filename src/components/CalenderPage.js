import React from 'react'

import "../styles/CalenderPage.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

function CalenderPage() {
  const year2020NovEvents = [
    //Beginners Yoga
    { title: "Beginner's Yoga", date: "2020-10-28" },
    { title: "Beginner's Yoga Class", start: '2020-10-28T19:00:00' },
    { title: "Beginner's Yoga", date: "2020-11-04" },
    { title: "Beginner's Yoga Class", start: '2020-11-04T19:00:00' },
    { title: "Beginner's Yoga", date: "2020-11-11" },
    { title: "Beginner's Yoga Class", start: '2020-11-11T19:00:00' },
    { title: "Beginner's Yoga", date: "2020-11-18" },
    { title: "Beginner's Yoga Class", start: '2020-11-18T19:00:00' },
    //Kids Yoga
    { title: "Kid's Yoga", date: "2020-10-25" },
    { title: "Kid's Yoga Class", start: '2020-10-25T16:00:00' },
    { title: "Kid's Yoga", date: "2020-11-01" },
    { title: "Kid's Yoga Class", start: '2020-11-01T16:00:00' },
    { title: "Kid's Yoga", date: "2020-11-08" },
    { title: "Kid's Yoga Class", start: '2020-11-08T16:00:00' },
    { title: "Kid's Yoga", date: "2020-11-15" },
    { title: "Kid's Yoga Class", start: '2020-11-15T16:00:00' },
    //Advanced Yoga
    { title: "Advanced Yoga", date: "2020-10-31" },
    { title: "Advanced Yoga Class", start: '2020-10-31T09:00:00' },
    { title: "Advanced Yoga", date: "2020-11-07" },
    { title: "Advanced Yoga Class", start: '2020-11-07T09:00:00' },
    { title: "Advanced Yoga", date: "2020-11-14" },
    { title: "Advanced Yoga Class", start: '2020-11-14T09:00:00' },
    //Restorative Yoga
    { title: "Restorative Yoga", date: "2020-10-29" },
    { title: "Restorative Yoga Class", start: '2020-10-29T19:00:00' },
    { title: "Restorative Yoga", date: "2020-11-05" },
    { title: "Restorative Yoga Class", start: '2020-11-05T19:00:00' },
    { title: "Restorative Yoga", date: "2020-11-12" },
    { title: "Restorative Yoga Class", start: '2020-11-12T19:00:00' },
    { title: "Restorative Yoga", date: "2020-11-19" },
    { title: "Restorative Yoga Class", start: '2020-11-19T19:00:00' },
  ];
    return (
      <div className="calenderContainer">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          events={year2020NovEvents}          
          // events={[
          //   { title: "Restorative Yoga class", date: "2020-10-19"},
          //   { title: "Kid's Yoga Class", date: "2020-10-20" },
          // ]}
          eventTimeFormat={{
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true,
            meridiem: 'narrow'
          }}
          
          //add styling TODO
        />
      </div>
    );
}

export default CalenderPage