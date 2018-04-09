import React, { Component } from "react";

import { fetchAttendees } from "../api";
import BadgeList from "../components/badge-list";

import "../styles/app.css"

const ATTENDANCE_TYPE = {
  GOING: "yes",
  NOT_GOING: "no",
  WAITLIST: "waitlist"
}

class AttendanceDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendanceList: [],
      fetching: false
    }

    this.receiveAttendees = this.receiveAttendees.bind(this);
  }

  componentDidMount() {
    if (this.props.eventID) {
      fetchAttendees(this.receiveAttendees, this.props.eventID)

      this.setState({
        attendees: [],
        fetching: true
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.eventID !== this.props.eventID) {
      fetchAttendees(this.receiveAttendees, this.props.eventID)

      this.setState({
        attendanceList: [],
        fetching: true
      })
    }
  }

  receiveAttendees(attendanceList) {
    this.setState({
      attendanceList,
      fetching: false
    })
  }

  render() {
    const { attendanceList, fetching } = this.state;

    let renderGoingAttendees = null;
    let renderWaitlistAttendees = null;
    let renderNotGoingAttendees = null;

    if (attendanceList.length !== 0) {
      renderGoingAttendees = <BadgeList heading="Going" badgeData={filterListByType(attendanceList, ATTENDANCE_TYPE.GOING)} />;
      renderWaitlistAttendees = <BadgeList heading="Waitlist" badgeData={filterListByType(attendanceList, ATTENDANCE_TYPE.WAITLIST)} />;
      renderNotGoingAttendees = <BadgeList heading="Not Going" badgeData={filterListByType(attendanceList, ATTENDANCE_TYPE.NOT_GOING)} />;
    }

    return (
      <div className="standard-margins" style={{minHeight: "300px"}}>
        <div className="sub-title">
          Attendees 
        </div>
        {
          fetching ? 
          <div>
            Loading, please wait...
          </div>
          :
          <div>
            {renderGoingAttendees}
            {renderNotGoingAttendees}
            {renderWaitlistAttendees}
          </div>
        }
      </div>
    )
  }
}

export default AttendanceDetails;

const filterListByType = (attendanceList, attendanceType) => {
    return attendanceList.filter(attendant => 
      attendant.response === attendanceType
    )
    .map(attendant => {
      return {
        name: attendant.member.name,
        id: attendant.member.id,
        imageUrl: attendant.member.photo.thumb_link
      }
    })
}