import React, { Component } from "react";

import List from "./containers/list"
import EventDetails from "./containers/event-details"
import AttendanceDetails from "./containers/attendance-details"

import "./styles/app.css";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      eventID: null,
      eventTitle: "Loading please wait"
    }

    this.updateEventID = this.updateEventID.bind(this);
  }

  updateEventID(id, eventTitle) {
    this.setState({
      eventID: id,
      eventTitle
    })
  }

  render() {
    const { eventID, eventTitle } = this.state;
    
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Reactjs Dallas Meetups</h1>
        </header>
        <div className="flex fill-container">
          <List itemClick={this.updateEventID} selectedID={eventID}/>
          {
            eventID ?
            <div className="flex-column grow">  
              <EventDetails title={eventTitle} />
              <hr style={{ width: "100%" }} />
              <AttendanceDetails />
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
