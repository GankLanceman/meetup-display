import React from "react";

import "../styles/list.css"

const ListItem = ({ id, title, date, selected, action }) => {
  return (
    <div className={`list-item ${selected ? "selected-item" : ""}`} onClick={() => action(id, title)}>
      {title}
      <br />
      {date.toLocaleDateString()} {date.toLocaleTimeString()}
    </div>
  )
}

export default ListItem;