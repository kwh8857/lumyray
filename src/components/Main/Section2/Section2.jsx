import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section2() {
  const layout = useSelector((state) => state.layouts.section2);
  return (
    <div className="section2">
      <div className="top">
        건강한 나, 건강한 지구 <br />
        <span>
          원터치 컵 살균기 <br /> 루미레이와 함께하세요
        </span>
      </div>
      <div className="s2-gif">
        <img src="/assets/section2.gif" alt="gif" />
      </div>
      <div className="section2_box">
        {layout.map((item, idx) => {
          return (
            <div
              className="box_wrapper"
              key={idx}
              style={idx === 2 ? { border: "none" } : undefined}
            >
              <img src={`/assets/section2_${idx + 1}.svg`} alt="이미지" />
              <div className="title_wrapper">
                <div className="title">
                  {item.title.left}
                  <span>{item.title.right}</span>
                </div>
                <div className="sub">{item.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section2;
