import React from "react";
import "./css/index.css";
function Secetion15() {
  return (
    <div className="section15">
      <div className="left">
        <div className="top">루미레이 적합등록번호 R-R-WUP-lumiray_cup_01</div>
        <img
          className="s15-img"
          src="/assets/section15.png"
          alt="사진"
          srcSet="/assets/section15@2x.png 2x,/assets/section15@3x.png 3x"
        />
        <div className="sub">
          루미레이 컵 살균기는 엄격한 품질관리와 자발적 제품검사를 <br /> 통해
          KC인증을 받은 믿을 수 있는 안전한 제품입니다.
        </div>
      </div>
      <div className="right">
        <img
          className="s15-one"
          src="/assets/section15_1.png"
          alt="사진"
          srcSet="/assets/section15_1@2x.png 2x,/assets/section15_1@3x.png 3x"
        />
      </div>
    </div>
  );
}

export default Secetion15;
