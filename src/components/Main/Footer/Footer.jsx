import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Footer() {
  const agnt = useSelector((state) => state.layouts.type);
  return (
    <div className="footer">
      <img src="/assets/footer.svg" alt="푸터" />
      <div className="title">
        {agnt === "MB"
          ? `루미레이  |  사업자등록번호 123-12-12345 | 
대표 장용진  |  경상북도 포항시 남구 지곡로 80,
 5층 517호 (포항공과대학교 제1융합관)  | 
samssonight@naver.com`
          : `루미레이 | 사업자등록번호 123-12-12345 | 대표 장용진  경상북도
        포항시 남구 지곡로 80, 5층 517호 (포항공과대학교 제1융합관) |
        samssonight@naver.com`}
      </div>
    </div>
  );
}

export default Footer;
