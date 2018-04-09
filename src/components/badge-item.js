import React from "react";

import "../styles/list.css";

const BadgeItem = ({ name, imageUrl }) => {
  return (
    <div className="badge">
      <img src={imageUrl} alt={name} className="badge-image" />
      <div title={name} className="badge-text">
        {name}
      </div>
    </div>
  )
}

export default BadgeItem;