import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Store() {
  const agnt = useSelector((state) => state.layouts.type);

  return (
    <div className="store">
      <img
        className="title"
        src={`/assets/naver${agnt === "MB" ? "_mb" : ""}.png`}
        alt="사진"
        srcSet={`/assets/naver${
          agnt === "MB" ? "_mb" : ""
        }@2x.png 2x,/assets/naver${agnt === "MB" ? "_mb" : ""}@3x.png 3x`}
      />
    </div>
  );
}

export default Store;
