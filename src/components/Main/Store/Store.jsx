import React from "react";
import "./css/index.css";
function Store() {
  return (
    <div className="store">
      <img
        className="naver"
        src="/assets/naver.png"
        srcSet="/assets/naver@2x.png 2x , /assets/naver@3x.png 3x"
        alt="스토어팜"
      />
    </div>
  );
}

export default Store;
