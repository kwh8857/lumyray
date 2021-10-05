import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Footer() {
  const agnt = useSelector((state) => state.layouts.type);
  return (
    <div className="footer">
      <img src="/assets/footer.svg" alt="푸터" />
      <div className="title">
        {agnt === "MB" ? (
          `웹업  |  사업자등록번호 669-60-00332 | 대표 장용진
              경상북도 포항시 남구 청암로 87 체인지업그라운드 6층 651호
 우편번호 37673  | samssonight@naver.com`
        ) : (
          <>
            웹업 | 사업자등록번호 669-60-00332 | 대표 장용진 <br /> 경상북도
            포항시 남구 청암로 87 체인지업그라운드 6층 651호 / 우편번호 37673 |
            samssonight@naver.com
          </>
        )}
      </div>
    </div>
  );
}

export default Footer;
