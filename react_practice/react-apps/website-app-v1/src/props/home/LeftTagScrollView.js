import React from "react";

function LeftTagScrollView() {
  const tags = [
    "#facebook",
    "#resume",
    "#interview",
    "#onsite",
    "#phone screen",
    "#FAANG",
    "#Google",
    "#facebook",
    "#resume",
    "#interview",
    "#onsite",
    "#phone screen",
    "#FAANG",
    "#Google",
    "#facebook",
    "#resume",
    "#interview",
    "#onsite",
    "#phone screen",
    "#FAANG",
    "#Google",
  ];
  return (
    <div className="left-container-scrollview">
      <div className="scrollview-content">
        <h4 className="header-title">Tags</h4>
        <ul className="scrollview-list-items">
          {tags.map((tag) => {
            return <li className="listItem">{tag}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default LeftTagScrollView;
