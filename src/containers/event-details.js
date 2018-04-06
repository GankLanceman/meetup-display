import React, { Component } from "react";

class EventDetails extends Component {
  render() {
    return (
      <div className="grow standard-margins" style={{minHeight: "300px", minWidth: "300px"}}>
        <div className="sub-title">
          {this.props.title}
        </div>

      </div>
    )
  }
}

export default EventDetails;