import React from "react";
import { useSelector } from "react-redux";
import "./css/index.css";
function Section14() {
  const agnt = useSelector((state) => state.layouts.type);
  return (
    <div className="section14">
      <div className="title">
        믿을 수 있는
        <br /> 루미레이 컵 살균기
      </div>
      <div className="sub">
        루미레이 컵 살균기는 시험인증을 마친 <br /> 믿을 수 있는 제품으로
        안심하고 사용하실 수 있습니다 <br />
        <span>KCL 성적서번호 CT21-065349K</span>
      </div>
      <img
        className="s14-main-img"
        src={`/assets/section14_1${agnt === "MB" ? "_mb" : ""}.png`}
        alt="사진"
        srcSet={`/assets/section14_1${
          agnt === "MB" ? "_mb" : ""
        }@2x.png 2x,/assets/section14_1${agnt === "MB" ? "_mb" : ""}@3x.png 3x`}
      />
      <img
        className="s14-sub-img"
        src="/assets/section14_2.png"
        alt="사진"
        srcSet="/assets/section14_2@2x.png 2x,/assets/section14_2@3x.png 3x"
      />
    </div>
  );
}

export default Section14;
