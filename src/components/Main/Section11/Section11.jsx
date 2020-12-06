import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section11() {
  const agnt = useSelector((state) => state.layouts.type);
  return (
    <div className="section11">
      <div className="title">
        맞춤형 디자인 살균기,{agnt === "MB" ? <br /> : undefined}{" "}
        <span>루미레이를 만나보세요</span>
      </div>
      <div className="btn">
        <img
          className="icon"
          src="/assets/section11_icon.png"
          alt="사진"
          srcSet="/assets/section11_icon@2x.png 2x,/assets/section11_icon@3x.png 3x"
        />
        <div className="btn_title">루미레이 스토어 바로가기</div>
      </div>
    </div>
  );
}

export default Section11;
