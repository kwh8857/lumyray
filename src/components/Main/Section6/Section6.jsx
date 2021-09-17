import React from "react";
import { useSelector } from "react-redux";
import "./css/index.css";
export default function Section6() {
  const agnt = useSelector((state) => state.layouts.type);

  return (
    <div
      className="section6"
      style={
        agnt === "MB"
          ? undefined
          : {
              backgroundImage: `url(/assets/section6.png)`,
            }
      }
    >
      <div className="section6-wrapper">
        <img
          src={`/assets/section6-title${agnt === "MB" ? "_mb" : ""}.png`}
          alt="간편한 청결함"
          srcSet={`/assets/section6-title${
            agnt === "MB" ? "_mb" : ""
          }@2x.png 2x,/assets/section6-title${
            agnt === "MB" ? "_mb" : ""
          }@3x.png 3x`}
        />
        <div className="title">
          루미레이가 당신의 환경을
          <br />
          <span>항상 청결하게 관리해줍니다</span>
        </div>
        {agnt === "MB" ? (
          <img
            className="s6-mb"
            src="/assets/section6_mb.png"
            alt="사진"
            srcSet="/assets/section6_mb@2x.png 2x,/assets/section6_mb@3x.png 3x"
          />
        ) : undefined}
      </div>
    </div>
  );
}
