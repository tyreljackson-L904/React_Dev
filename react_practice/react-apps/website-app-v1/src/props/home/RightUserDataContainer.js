import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";

function RightUserDataContainer() {
  return (
    <div className="right-profile-container">
      <div className="right-profile-name-image">
        <h4 className="profile-name">Tyrel Jackson</h4>
        <RiAccountCircleLine size={34} />
      </div>
      <div className="profile-user-data"></div>
    </div>
  );
}

export default RightUserDataContainer;
