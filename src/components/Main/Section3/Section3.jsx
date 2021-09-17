import React from "react";
import { useSelector } from "react-redux";
import "./css/index.css";
function Section3() {
  const agnt = useSelector((state) => state.layouts.type);
  return (
    <div
      className="section3"
      style={
        agnt !== "MB"
          ? {
              backgroundImage: `url(/assets/section3_back.png)`,
            }
          : undefined
      }
    >
      <div className="s3-wrapper">
        <div className="title">01 우리를 더 건강하게</div>
        <div className="box">
          <img
            src={`/assets/section3_slogan${agnt === "MB" ? "_mb" : ""}.png`}
            alt="우리를 더 건강하게"
            srcSet={`/assets/section3_slogan${
              agnt === "MB" ? "_mb" : ""
            }@2x.png 2x,/assets/section3_slogan${
              agnt === "MB" ? "_mb" : ""
            }@3x.png 3x`}
          />
          <div className="box_title">
            매일 입에 닿는 컵, <br /> 어떻게 관리하고 계시나요?
          </div>
          <div className="box_sub">
            간편하게 컵에 올려놓으면 끝! <br /> 번거로워 미루었던 컵 위생관리,
            {agnt === "MB" ? <br /> : undefined}
            루미레이와 함께하세요
          </div>
          {agnt === "MB" ? (
            <img
              className="s3-mb"
              src="/assets/section3_mb.png"
              alt="사진"
              srcSet="/assets/section3_mb@2x.png 2x,/assets/section3_mb@3x.png 3x"
            />
          ) : undefined}
        </div>
      </div>
      {agnt !== "MB" ? <div className="back" /> : undefined}
    </div>
  );
}

export default Section3;
