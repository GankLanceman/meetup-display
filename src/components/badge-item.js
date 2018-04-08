import React from "react";

const BadgeItem = ({ name, imageUrl }) => {
  return (
    <div className="badge">
      <img src={imageUrl} alt={name} className="badge-image" />
      <div title={name}>
        {name}
      </div>
    </div>
  )
}

export default BadgeItem;