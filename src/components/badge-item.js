import React from "react";

const BadgeItem = ({ name, imageUrl }) => {
  return (
    <div className="badge">
      <img src={imageUrl} alt="" className="badge-image" />
      {name}
    </div>
  )
}

export default BadgeItem;