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
        <div className="title">
          살균하지 않은 컵,{agnt === "MB" ? <br /> : undefined} 청소를 하지 않은
          변기와 비슷 {agnt === "MB" ? "" : `한 수준`}
        </div>
        <div className="sub">방금 주문한 컵 기준 오염도 5740 까지 측정</div>
      </div>
    </div>
  );
}

export default Section4;
