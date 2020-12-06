import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Bottom() {
  const layout = useSelector((state) => state.layouts.bottom);
  return (
    <div className="bottom">
      {layout.map((item, idx) => {
        if (idx === 0) {
          return (
            <div className="one">
              <div className="greybar" />
              <div className="box"></div>
            </div>
          );
        } else {
          return <div></div>;
        }
      })}
    </div>
  );
}

export default Bottom;
