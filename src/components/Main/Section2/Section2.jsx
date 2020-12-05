import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section2() {
  const layout = useSelector((state) => state.layouts.section2);
  const agnt = useSelector((state) => state.layouts.type);
  return (
    <div
      className="section2"
      style={{
        backgroundImage: `url(/assets/section2${
          agnt === "MB" ? "_mb" : ""
        }_back.png)`,
      }}
    >
      <div className="top">
        건강한 나, 건강한 지구 <br />
        <span>
          원터치 컵 살균기 {agnt === "MB" ? <br /> : undefined} 루미레이와
          함께하세요
        </span>
      </div>
      <img
        className="naver"
        src="/assets/naver.png"
        srcSet="/assets/naver2x.png 2x , /assets/naver3x.png 3x"
        alt="스토어팜"
      />
      <div className="section2_box">
        {layout.map((item, idx) => {
          return (
            <div className="box_wrapper" key={idx}>
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
