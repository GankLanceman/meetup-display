import React, { Component } from "react";

import "../styles/list.css"

class List extends Component {
  render() {
    return (
      <div className="list-panel standard-margins">
        <div className="sub-title">
          Meetups
        </div>
        <hr style={{ width: "100%" }} />
        <div className="list grow">
          <div className="list-item">
            Item
          </div>
          <div className="list-item">
            Item
          </div>
          <div className="list-item">
            Item
          </div>
          <div className="list-item">
            Item
          </div>
          <div className="list-item">
            Item
          </div>
          <div className="list-item">
            Item
          </div>
          <div className="list-item">
            Item
          </div>
        </div>
      </div>
    )
  }
}

export default List;