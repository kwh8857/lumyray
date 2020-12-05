import React from "react";
import { useSelector } from "react-redux";
import "./css/index.css";
export default function Section6() {
  const agnt = useSelector((state) => state.layouts.type);

  return (
    <div
      className="section6"
      style={{
        backgroundImage: `url(/assets/section6${
          agnt === "MB" ? "_mb" : ""
        }.png)`,
      }}
    >
      <div className="title">
        루미레이가{agnt === "MB" ? <br /> : undefined} 당신의 환경을
        <br />
        <span>항상 청결하게 관리해줍니다</span>
      </div>
    </div>
  );
}
