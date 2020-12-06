import React from "react";
import "./css/index.css";
function Section8() {
  return (
    <div className="section8">
      <div className="wrapper">
        <div className="top">02 지구를 더 가볍게</div>
        <img
          className="section8_image"
          src="/assets/section8.png"
          alt="사진"
          srcSet="/assets/section8@2x.png 2x,/assets/section8@3x.png 3x"
        />
        <div className="title">
          꾸준한 컵의 재사용은 <br /> 지구를 가볍게합니다
        </div>
        <div className="sub">
          회사원의 1년 종이컵 사용량은 약 500잔 <br /> 1년간 종이컵으로 인한
          나무 사용은 120억 그루 <br />
          <span>-한국에너지 공단</span>
        </div>
      </div>
    </div>
  );
}

export default Section8;
