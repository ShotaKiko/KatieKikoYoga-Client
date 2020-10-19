import React from "react";
import "../styles/CalenderPage.scss";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";

export default class DemoApp extends React.Component {
  render() {
    return (
      <div className="calenderContainer">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "Restorative Yoga class", date: "2020-10-19" },
            { title: "Kid's Yoga Class", date: "2020-10-20" },
          ]}
        />
      </div>
    );
  }
}
