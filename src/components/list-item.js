import React from "react";

import { formatDate } from "../utilities"

import "../styles/list.css"

const ListItem = ({ itemDetails, title, date, selected, action }) => {
  return (
    <div className={`list-item ${selected ? "selected-item" : ""}`} onClick={() => action(itemDetails)}>
      {title}
      <br />
      <div style={{fontSize: ".8em"}}>
        {formatDate(date)}
      </div>
    </div>
  )
}

export default ListItem;