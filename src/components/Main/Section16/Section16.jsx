import React from "react";
import { useSelector } from "react-redux";
import "./css/index.css";
function Section16() {
  const agnt = useSelector((state) => state.layouts.type);
  return (
    <div className="section16">
      <div className="title">루미레이 ATP 위생검사</div>
      <div className="sub">
        *ATP는 세균을 포함한 미생물 양을{agnt === "MB" ? <br /> : undefined}
        가늠할 수 있는 검사입니다. <br />
        <span>*출처: 클린큐 ATP 휴대용 측정기</span>
      </div>
      <img
        src={`/assets/section16-1${agnt === "MB" ? "mb" : ""}.png`}
        srcSet={`/assets/section16-1${
          agnt === "MB" ? "mb" : ""
        }@2x.png 2x,/assets/section16-1${agnt === "MB" ? "mb" : ""}@3x.png 3x`}
        alt="이미지"
        className="s16-one"
      />{" "}
      <img
        src={`/assets/section16-2${agnt === "MB" ? "mb" : ""}.png`}
        srcSet={`/assets/section16-2${
          agnt === "MB" ? "mb" : ""
        }@2x.png 2x,/assets/section16-2${agnt === "MB" ? "mb" : ""}@3x.png 3x`}
        alt="이미지"
        className="s16-two"
      />
      <div className="img-wrapper">
        <div className="one">
          <div className="box-title">
            일상 컵 루미레이 {agnt === "MB" ? <br /> : undefined}
            <span>3분살균 테스트</span>
          </div>
          <video
            src="/assets/section16-one.mp4"
            autoPlay
            muted
            loop={true}
            playsInline
          ></video>
        </div>
        <div className="two">
          <div className="box-title">
            일상 텀블러 루미레이 {agnt === "MB" ? <br /> : undefined}
            <span>3분살균 테스트</span>
          </div>
          <video
            src="/assets/section16-two.mp4"
            autoPlay
            muted
            loop={true}
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Section16;
