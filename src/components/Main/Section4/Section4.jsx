import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section4() {
  const agnt = useSelector((state) => state.layouts.type);
  return (
    <div className="section4">
      <img
        src="/assets/section4.png"
        alt="사진"
        srcSet="/assets/section4@2x.png 2x,/assets/section4@3x.png 3x"
      />
      <div className="box">
        <img
          className="title"
          src={`/assets/section4_title${agnt === "MB" ? "_mb" : ""}.png`}
          alt="사진"
          srcSet={`/assets/section4_title${
            agnt === "MB" ? "_mb" : ""
          }@2x.png 2x,/assets/section4_title${
            agnt === "MB" ? "_mb" : ""
          }@3x.png 3x`}
        />
        <div className="sub">방금 주문한 컵 기준 오염도 5740 까지 측정</div>
      </div>
    </div>
  );
}

export default Section4;
