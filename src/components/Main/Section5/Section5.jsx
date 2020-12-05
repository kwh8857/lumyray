import React from "react";
import { useSelector } from "react-redux";
import "./css/index.css";
function Section5() {
  const agnt = useSelector((state) => state.layouts.type);

  return (
    <div className="section5">
      <div className="title">
        실천할 수 있는{agnt === "MB" ? <br /> : undefined} 간편한 청결함,
        루미레이
      </div>
      <img
        src={`/assets/section5${agnt === "MB" ? "_mb" : ""}.png`}
        alt="사진"
        srcSet={`/assets/section5${
          agnt === "MB" ? "_mb" : ""
        }@2x.png 2x,/assets/section5${agnt === "MB" ? "_mb" : ""}@3x.png 3x`}
      />
    </div>
  );
}

export default Section5;
