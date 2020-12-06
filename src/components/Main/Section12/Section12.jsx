import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section12() {
  const layout = useSelector((state) => state.layouts.section12);
  return (
    <div className="section12">
      {layout.map((item, idx) => {
        console.log(item);
        return (
          <div className="box" key={idx}>
            <img
              className="title"
              src={`${item}.png`}
              alt="사진"
              srcSet={`${item}@2x.png 2x,${item}@3x.png 3x`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Section12;
