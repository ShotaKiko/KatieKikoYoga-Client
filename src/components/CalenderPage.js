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
    { title: "Beginner's Yoga", date: "2021-03-03" },
    { title: "Beginner's Yoga Class", start: "2021-03-03T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-03-10" },
    { title: "Beginner's Yoga Class", start: "2021-03-10T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-03-17" },
    { title: "Beginner's Yoga Class", start: "2021-03-17T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-03-24" },
    { title: "Beginner's Yoga Class", start: "2021-03-24T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-03-31" },
    { title: "Beginner's Yoga Class", start: "2021-03-31T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-04-07" },
    { title: "Beginner's Yoga Class", start: "2021-04-07T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-04-14" },
    { title: "Beginner's Yoga Class", start: "2021-04-14T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-04-21" },
    { title: "Beginner's Yoga Class", start: "2021-04-21T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-04-28" },
    { title: "Beginner's Yoga Class", start: "2021-04-28T19:00:00" },
    { title: "Beginner's Yoga", date: "2021-05-05" },
    { title: "Beginner's Yoga Class", start: "2021-05-05T19:00:00" },

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
    { title: "Restorative Yoga", date: "2021-03-04" },
    { title: "Restorative Yoga Class", start: "2021-03-04T19:00:00" },
    { title: "Restorative Yoga", date: "2021-03-11" },
    { title: "Restorative Yoga Class", start: "2021-03-11T19:00:00" },
    { title: "Restorative Yoga", date: "2021-03-18" },
    { title: "Restorative Yoga Class", start: "2021-03-18T19:00:00" },
    { title: "Restorative Yoga", date: "2021-03-25" },
    { title: "Restorative Yoga Class", start: "2021-03-25T19:00:00" },
    { title: "Restorative Yoga", date: "2021-04-01" },
    { title: "Restorative Yoga Class", start: "2021-04-01T19:00:00" },
    { title: "Restorative Yoga", date: "2021-04-08" },
    { title: "Restorative Yoga Class", start: "2021-04-08T19:00:00" },
    { title: "Restorative Yoga", date: "2021-04-15" },
    { title: "Restorative Yoga Class", start: "2021-04-15T19:00:00" },
    { title: "Restorative Yoga", date: "2021-04-22" },
    { title: "Restorative Yoga Class", start: "2021-04-22T19:00:00" },
    { title: "Restorative Yoga", date: "2021-04-29" },
    { title: "Restorative Yoga Class", start: "2021-04-29T19:00:00" },
    { title: "Restorative Yoga", date: "2021-05-06" },
    { title: "Restorative Yoga Class", start: "2021-05-06T19:00:00" },

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
    { title: "Advanced Yoga", date: "2021-03-06" },
    { title: "Advanced Yoga Class", start: "2021-03-06T09:00:00" },
    { title: "Advanced Yoga", date: "2021-03-13" },
    { title: "Advanced Yoga Class", start: "2021-03-13T09:00:00" },
    { title: "Advanced Yoga", date: "2021-03-20" },
    { title: "Advanced Yoga Class", start: "2021-03-20T09:00:00" },
    { title: "Advanced Yoga", date: "2021-03-27" },
    { title: "Advanced Yoga Class", start: "2021-03-27T09:00:00" },
    { title: "Advanced Yoga", date: "2021-04-03" },
    { title: "Advanced Yoga Class", start: "2021-04-03T09:00:00" },
    { title: "Advanced Yoga", date: "2021-04-10" },
    { title: "Advanced Yoga Class", start: "2021-04-10T09:00:00" },
    { title: "Advanced Yoga", date: "2021-04-17" },
    { title: "Advanced Yoga Class", start: "2021-04-17T09:00:00" },
    { title: "Advanced Yoga", date: "2021-04-24" },
    { title: "Advanced Yoga Class", start: "2021-04-24T09:00:00" },
    { title: "Advanced Yoga", date: "2021-05-01" },
    { title: "Advanced Yoga Class", start: "2021-05-01T09:00:00" },
    { title: "Advanced Yoga", date: "2021-05-08" },
    { title: "Advanced Yoga Class", start: "2021-05-08T09:00:00" },
    { title: "Advanced Yoga", date: "2021-05-15" },
    { title: "Advanced Yoga Class", start: "2021-05-15T09:00:00" },
    { title: "Advanced Yoga", date: "2021-05-22" },
    { title: "Advanced Yoga Class", start: "2021-05-22T09:00:00" },

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
    { title: "Kid's Yoga", date: "2021-03-07" },
    { title: "Kid's Yoga Class", start: "2021-03-07T16:00:00" },
    { title: "Kid's Yoga", date: "2021-03-14" },
    { title: "Kid's Yoga Class", start: "2021-03-14T16:00:00" },
    { title: "Kid's Yoga", date: "2021-03-21" },
    { title: "Kid's Yoga Class", start: "2021-03-21T16:00:00" },
    { title: "Kid's Yoga", date: "2021-03-28" },
    { title: "Kid's Yoga Class", start: "2021-03-28T16:00:00" },
    { title: "Kid's Yoga", date: "2021-04-04" },
    { title: "Kid's Yoga Class", start: "2021-04-04T16:00:00" },
    { title: "Kid's Yoga", date: "2021-04-11" },
    { title: "Kid's Yoga Class", start: "2021-04-11T16:00:00" },
    { title: "Kid's Yoga", date: "2021-04-18" },
    { title: "Kid's Yoga Class", start: "2021-04-18T16:00:00" },
    { title: "Kid's Yoga", date: "2021-04-25" },
    { title: "Kid's Yoga Class", start: "2021-04-25T16:00:00" },
    { title: "Kid's Yoga", date: "2021-05-02" },
    { title: "Kid's Yoga Class", start: "2021-05-02T16:00:00" },
    
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
