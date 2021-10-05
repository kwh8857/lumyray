import React from "react";
import { useSelector } from "react-redux";
import "./css/index.css";
function Section12() {
  const agnt = useSelector((state) => state.layouts.type);
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
      <div className="bottom-section">
        <div className="title">
          <span> 한 번의 터치로 살균 시작!</span> <br /> 살균이 완료되면 <br />
          <span>자동</span>으로 전원이 꺼져요
        </div>
        <div className="sub">
          {agnt !== "MB" ? (
            <>
              매일 사용하는 컵위에 올려만 놓으세요.
              <br /> 루미레이를 쓰담쓰담~하듯 한번만 터치해주시면 살균이
              시작되고,
              <br /> 살균이 완료되면 자동으로 전원이 꺼집니다.
            </>
          ) : (
            <>
              매일 사용하는 컵위에 올려만 놓으세요.
              <br /> 루미레이를 쓰담쓰담~하듯 한번만 <br /> 터치해주시면 살균이
              시작되고,
              <br /> 살균이 완료되면 자동으로 전원이 꺼집니다.
            </>
          )}
        </div>
        <img src="/assets/section12_1.gif" alt="GIF" className="one-gif" />
        <img src="/assets/section12_2.gif" alt="GIF" className="two-gif" />
      </div>
    </div>
  );
}

export default Section12;
