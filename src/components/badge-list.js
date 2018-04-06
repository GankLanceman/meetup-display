import React from "react";

import BadgeItem from "./badge-item";

const BadgeList = ({ heading, badgeData }) => {
  const renderBadgeItems = badgeData.map(badge => {
    return (
      <BadgeItem key={badge.id} name={badge.name} imageUrl={badge.imageUrl} />
    )
  })

  return (
    <div style={{padding: "10px 0"}}>
      <div className="sub-heading">
        {`${heading} ${badgeData.length}`}
      </div>
      <div className="badge-list">
        {renderBadgeItems}
      </div>
    </div>
  )
}

export default BadgeList;