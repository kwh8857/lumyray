import React from "react";
import "./css/index.css";
function Section12() {
  return (
    <div className="section12">
      <img src={`/assets/section12_top.svg`} alt="케이블" className="top" />
      <div className="title">
        C-TYPE 케이블로
        <br /> 간편하게 충전하세요
      </div>
      <div className="sub">
        복잡한 배터리 충전과정 없이 C-TYPE <br /> 케이블을 연결하여 간편하게
        충전하세요
      </div>
      <img
        className="one"
        src="/assets/section12_1.png"
        alt="사진"
        srcSet="/assets/section12_1@2x.png 2x,/assets/section12_1@3x.png 3x"
      />
      <img
        className="two"
        src="/assets/section12_2.png"
        alt="사진"
        srcSet="/assets/section12_2@2x.png 2x,/assets/section12_2@3x.png 3x"
      />
    </div>
  );
}

export default Section12;
