import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section9() {
  const agnt = useSelector((state) => state.layouts.type);
  return (
    <div className="section9">
      <img
        className="one"
        src={`/assets/section9${agnt === "MB" ? "_mb" : ""}.png`}
        alt="사진"
        srcSet={`/assets/section9${
          agnt === "MB" ? "_mb" : ""
        }@2x.png 2x,/assets/section9${agnt === "MB" ? "_mb" : ""}@3x.png 3x`}
      />
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
