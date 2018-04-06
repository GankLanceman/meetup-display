import React from "react";

import { formatDate } from "../utilities";

const EventDetails = ({ event }) => {
  const eventDate = new Date(event.time)

  return (
    <div className="standard-margins" style={{ minHeight: "300px" }}>
      <div className="sub-title">
        {event.name}
      </div>
      <div className="sub-heading">
        {formatDate(eventDate)}
      </div>
      <div>
        {"For official meetup details "}
        <a href={event.link}>click here</a>
      </div>
      <div dangerouslySetInnerHTML={{ __html: event.description }}></div>
    </div>
  )
}

export default EventDetails;