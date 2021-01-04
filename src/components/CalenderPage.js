import React from "react";

import "../styles/CalenderPage.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const windowWidthSize = window.innerWidth;
function determineDisplay(windowWidthSize) {
  if (windowWidthSize > 600) {
    return "dayGridMonth";
  } else {
    return "dayGridDay";
  }
}

const initialView = determineDisplay(windowWidthSize);

function CalenderPage() {
  const year2020NovEvents = [
    //Beginners Yoga
    { title: "Beginner's Yoga", date: "2021-01-06" },
    { title: "Beginner's Yoga Class", start: "2021-01-06T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-01-13" },
    { title: "Beginner's Yoga Class", start: "2021-01-13T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-01-20" },
    { title: "Beginner's Yoga Class", start: "2021-01-20T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-01-27" },
    { title: "Beginner's Yoga Class", start: "2021-01-27T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-02-03" },
    { title: "Beginner's Yoga Class", start: "2021-02-03T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-02-10" },
    { title: "Beginner's Yoga Class", start: "2021-02-10T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-02-17" },
    { title: "Beginner's Yoga Class", start: "2021-02-17T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-02-24" },
    { title: "Beginner's Yoga Class", start: "2021-02-24T19:00:00" },

    //Restorative Yoga
    { title: "Restorative Yoga", date: "2021-01-07" },
    { title: "Restorative Yoga Class", start: "2021-01-07T19:00:00" },
    { title: "Restorative Yoga", date: "2021-01-14" },
    { title: "Restorative Yoga Class", start: "2021-01-14T19:00:00" },
    { title: "Restorative Yoga", date: "2021-01-21" },
    { title: "Restorative Yoga Class", start: "2021-01-21T19:00:00" },
    { title: "Restorative Yoga", date: "2021-01-28" },
    { title: "Restorative Yoga Class", start: "2021-01-28T19:00:00" },
    { title: "Restorative Yoga", date: "2021-02-04" },
    { title: "Restorative Yoga Class", start: "2021-02-04T19:00:00" },
    { title: "Restorative Yoga", date: "2021-02-11" },
    { title: "Restorative Yoga Class", start: "2021-02-11T19:00:00" },
    { title: "Restorative Yoga", date: "2021-02-18" },
    { title: "Restorative Yoga Class", start: "2021-02-18T19:00:00" },
    { title: "Restorative Yoga", date: "2021-02-25" },
    { title: "Restorative Yoga Class", start: "2021-02-25T19:00:00" },

    //Advanced Yoga
    { title: "Advanced Yoga", date: "2021-01-02" },
    { title: "Advanced Yoga Class", start: "2021-01-02T09:00:00" },
    { title: "Advanced Yoga", date: "2021-01-09" },
    { title: "Advanced Yoga Class", start: "2021-01-09T09:00:00" },
    { title: "Advanced Yoga", date: "2021-01-16" },
    { title: "Advanced Yoga Class", start: "2021-01-16T09:00:00" },
    { title: "Advanced Yoga", date: "2021-01-23" },
    { title: "Advanced Yoga Class", start: "2021-01-23T09:00:00" },
    { title: "Advanced Yoga", date: "2021-01-30" },
    { title: "Advanced Yoga Class", start: "2021-01-30T09:00:00" },
    { title: "Advanced Yoga", date: "2021-02-06" },
    { title: "Advanced Yoga Class", start: "2021-02-06T09:00:00" },
    { title: "Advanced Yoga", date: "2021-02-13" },
    { title: "Advanced Yoga Class", start: "2021-02-13T09:00:00" },
    { title: "Advanced Yoga", date: "2021-02-20" },
    { title: "Advanced Yoga Class", start: "2021-02-20T09:00:00" },
    { title: "Advanced Yoga", date: "2021-02-27" },
    { title: "Advanced Yoga Class", start: "2021-02-27T09:00:00" },

    //Kids Yoga
    { title: "Kid's Yoga", date: "2021-01-03" },
    { title: "Kid's Yoga Class", start: "2021-01-03T16:00:00" },
    { title: "Kid's Yoga", date: "2021-01-10" },
    { title: "Kid's Yoga Class", start: "2021-01-10T16:00:00" },
    { title: "Kid's Yoga", date: "2021-01-17" },
    { title: "Kid's Yoga Class", start: "2021-01-17T16:00:00" },
    { title: "Kid's Yoga", date: "2021-01-24" },
    { title: "Kid's Yoga Class", start: "2021-01-24T16:00:00" },
    { title: "Kid's Yoga", date: "2021-01-31" },
    { title: "Kid's Yoga Class", start: "2021-01-31T16:00:00" },
    { title: "Kid's Yoga", date: "2021-02-07" },
    { title: "Kid's Yoga Class", start: "2021-02-07T16:00:00" },
    { title: "Kid's Yoga", date: "2021-02-14" },
    { title: "Kid's Yoga Class", start: "2021-02-14T16:00:00" },
    { title: "Kid's Yoga", date: "2021-02-21" },
    { title: "Kid's Yoga Class", start: "2021-02-21T16:00:00" },
    { title: "Kid's Yoga", date: "2021-02-28" },
    { title: "Kid's Yoga Class", start: "2021-02-28T16:00:00" },
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
          hour: "numeric",
          minute: "2-digit",
          omitZeroMinute: true,
          meridiem: "narrow",
        }}
        eventBackgroundColor="#26823e"
        eventBorderColor="#26823e"
      />
    </div>
  );
}

export default CalenderPage;
