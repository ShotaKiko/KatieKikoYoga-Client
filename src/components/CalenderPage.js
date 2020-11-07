import React from 'react'

import "../styles/CalenderPage.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const windowWidthSize = window.innerWidth
function determineDisplay(windowWidthSize) {
  if (windowWidthSize > 600) {
    return "dayGridMonth"
  } else {
    return "dayGridDay"
  }
}

const initialView = determineDisplay(windowWidthSize)

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
    { title: "Beginner's Yoga", date: "2020-11-25" },
    { title: "Beginner's Yoga Class", start: '2020-11-25T19:00:00' },
    { title: "Beginner's Yoga", date: "2020-12-02" },
    { title: "Beginner's Yoga Class", start: '2020-12-02T19:00:00' },
    { title: "Beginner's Yoga", date: "2020-12-09" },
    { title: "Beginner's Yoga Class", start: '2020-12-09T19:00:00' },
    { title: "Beginner's Yoga", date: "2020-12-16" },
    { title: "Beginner's Yoga Class", start: '2020-12-16T19:00:00' },
    //Kids Yoga
    { title: "Kid's Yoga", date: "2020-10-25" },
    { title: "Kid's Yoga Class", start: '2020-10-25T16:00:00' },
    { title: "Kid's Yoga", date: "2020-11-01" },
    { title: "Kid's Yoga Class", start: '2020-11-01T16:00:00' },
    { title: "Kid's Yoga", date: "2020-11-08" },
    { title: "Kid's Yoga Class", start: '2020-11-08T16:00:00' },
    { title: "Kid's Yoga", date: "2020-11-15" },
    { title: "Kid's Yoga Class", start: '2020-11-15T16:00:00' },
    { title: "Kid's Yoga", date: "2020-11-22" },
    { title: "Kid's Yoga Class", start: '2020-11-22T16:00:00' },
    { title: "Kid's Yoga", date: "2020-11-29" },
    { title: "Kid's Yoga Class", start: '2020-11-29T16:00:00' },
    { title: "Kid's Yoga", date: "2020-12-06" },
    { title: "Kid's Yoga Class", start: '2020-12-06T16:00:00' },
    { title: "Kid's Yoga", date: "2020-12-13" },
    { title: "Kid's Yoga Class", start: '2020-12-13T16:00:00' },
    { title: "Kid's Yoga", date: "2020-12-20" },
    { title: "Kid's Yoga Class", start: '2020-12-20T16:00:00' },
    //Advanced Yoga
    { title: "Advanced Yoga", date: "2020-10-31" },
    { title: "Advanced Yoga Class", start: '2020-10-31T09:00:00' },
    { title: "Advanced Yoga", date: "2020-11-07" },
    { title: "Advanced Yoga Class", start: '2020-11-07T09:00:00' },
    { title: "Advanced Yoga", date: "2020-11-14" },
    { title: "Advanced Yoga Class", start: '2020-11-14T09:00:00' },
    { title: "Advanced Yoga", date: "2020-11-21" },
    { title: "Advanced Yoga Class", start: '2020-11-21T09:00:00' },
    { title: "Advanced Yoga", date: "2020-11-28" },
    { title: "Advanced Yoga Class", start: '2020-11-28T09:00:00' },
    { title: "Advanced Yoga", date: "2020-12-05" },
    { title: "Advanced Yoga Class", start: '2020-12-05T09:00:00' },
    { title: "Advanced Yoga", date: "2020-12-12" },
    { title: "Advanced Yoga Class", start: '2020-12-12T09:00:00' },
    { title: "Advanced Yoga", date: "2020-12-19" },
    { title: "Advanced Yoga Class", start: '2020-12-19T09:00:00' },
    //Restorative Yoga
    { title: "Restorative Yoga", date: "2020-11-05" },
    { title: "Restorative Yoga Class", start: '2020-11-05T19:00:00' },
    { title: "Restorative Yoga", date: "2020-11-12" },
    { title: "Restorative Yoga Class", start: '2020-11-12T19:00:00' },
    { title: "Restorative Yoga", date: "2020-11-19" },
    { title: "Restorative Yoga Class", start: '2020-11-19T19:00:00' },
    { title: "Restorative Yoga", date: "2020-11-26" },
    { title: "Restorative Yoga Class", start: '2020-11-26T19:00:00' },
    { title: "Restorative Yoga", date: "2020-12-03" },
    { title: "Restorative Yoga Class", start: '2020-12-03T19:00:00' },
    { title: "Restorative Yoga", date: "2020-12-10" },
    { title: "Restorative Yoga Class", start: '2020-12-10T19:00:00' },
    { title: "Restorative Yoga", date: "2020-12-17" },
    { title: "Restorative Yoga Class", start: '2020-12-17T19:00:00' },
  ];
    return (
      <div className="calenderContainer">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView={initialView}
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
          eventBackgroundColor="#26823e"
          eventBorderColor="#26823e"
          
        />
      </div>
    );
}

export default CalenderPage