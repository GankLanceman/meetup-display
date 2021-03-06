import React, { Component } from "react";

import List from "./containers/list"
import AttendanceDetails from "./containers/attendance-details"
import EventDetails from "./components/event-details"

import "./styles/app.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      eventID: null,
      eventDetails: null
    }

    this.updateEvent = this.updateEvent.bind(this);
  }

  updateEvent(eventDetails) {
    this.setState({
      eventID: eventDetails.id,
      eventDetails
    })
  }

  render() {
    const { eventID, eventDetails } = this.state;
    
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Reactjs Dallas Meetups</h1>
        </header>
        <div className="flex">
          <List itemClick={this.updateEvent} selectedID={eventID}/>
          {
            eventID ?
            <div className="flex-column">  
              <EventDetails event={eventDetails} />
              <hr style={{ width: "100%"}} />
              <AttendanceDetails eventID={eventID} />
            </div>
            :
            <div className="standard-margins sub-title">
              {"<-- Please Select an event from the list"}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;