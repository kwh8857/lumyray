import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section9() {
  const agnt = useSelector((state) => state.layouts.type);
  return (
    <div className="section9">
      <div className="onewrapper">
        <img
          className="one"
          src={`/assets/section9${agnt === "MB" ? "_mb" : ""}.png`}
          alt="사진"
          srcSet={`/assets/section9${
            agnt === "MB" ? "_mb" : ""
          }@2x.png 2x,/assets/section9${agnt === "MB" ? "_mb" : ""}@3x.png 3x`}
        />
        {agnt === "PC" ? (
          <div
            className="talk"
            style={{ backgroundImage: `url(/assets/comment.png)` }}
          >
            <div className="talk_top">
              1년간 종이컵에 사용되는 <br /> 천연펄프 8만톤
            </div>
            <div className="bar" />
            <div className="talk_under">
              1년간 종이컵으로 인해 <br /> 배출되는 이산화탄소량 13만 2천톤
            </div>
          </div>
        ) : undefined}
      </div>
      <div
        className="under"
        style={{
          backgroundImage: `url(/assets/section9_1${
            agnt === "MB" ? "_mb" : ""
          }.png)`,
        }}
      >
        <img
          className="under_title"
          src={`/assets/section9_2${agnt === "MB" ? "_mb" : ""}.png`}
          alt="사진"
          srcSet={`/assets/section9_2${
            agnt === "MB" ? "_mb" : ""
          }@2x.png 2x,/assets/section9_2${
            agnt === "MB" ? "_mb" : ""
          }@3x.png 3x`}
        />
      </div>
    </div>
  );
}

export default Section9;
