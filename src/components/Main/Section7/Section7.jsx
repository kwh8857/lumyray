import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section7() {
  const agnt = useSelector((state) => state.layouts.type);

  return (
    <div className="section7">
      <div className="box">
        <img
          className="main_img"
          src="/assets/section7_1.png"
          alt="사진"
          srcSet="/assets/section7_1@2x.png 2x,/assets/section7_1@3x.png 3x"
        />
        <div className="wrapper">
          <div className="title">
            간편한 케이스 분리 <br /> <span>가방에 쏙 들어가는 살균기</span>
            {agnt === "MB" ? undefined : (
              <img className="plus" src="/assets/plus.svg" alt="플러스" />
            )}
          </div>
        </div>
      </div>
      <div className="box">
        <img
          className="main_img"
          src="/assets/section7_2.png"
          alt="사진"
          srcSet="/assets/section7_2@2x.png 2x,/assets/section7_2@3x.png 3x"
        />
        <div className="wrapper">
          <div className="title">
            어떤 사이즈에서도 사용가능한
            <br /> <span>활용도 높은 살균기</span>
            {agnt === "MB" ? undefined : (
              <img className="plus" src="/assets/plus.svg" alt="플러스" />
            )}
          </div>
        </div>
      </div>
      <div className="box">
        <img
          className="main_img"
          src="/assets/section7_3.png"
          alt="사진"
          srcSet="/assets/section7_3@2x.png 2x,/assets/section7_3@3x.png 3x"
        />
        <div className="wrapper">
          <div className="title">
            커스텀 디자인으로
            <br /> <span> 나에게 맞는 살균기</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
