import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section10() {
  const agnt = useSelector((state) => state.layouts.type);

  return (
    <div
      className="section10"
      style={{
        backgroundImage: `url(/assets/section10${
          agnt === "MB" ? "_mb" : ""
        }.png)`,
      }}
    >
      <div className="top">03 일상을 더욱 즐겁게</div>
      <img
        className="title"
        src="/assets/section10_title.png"
        alt="사진"
        srcSet="/assets/section10_title@2x.png 2x,/assets/section10_title@3x.png 3x"
      />
      <div className="text_title">
        뻔한 소독기는 그만, <br /> 나만의 소독기를 만나보세요
      </div>
      <div className="sub">
        루미레이의 자체 제작 기능을 통해 <br /> 센스있는 답례품부터 소중한
        기념품까지 <br />
        다양한 제품을 만나보세요!
      </div>
    </div>
  );
}

export default Section10;
