import React from "react";
import { useSelector } from "react-redux";
import "./css/index.css";
const dummy = [
  {
    img: "section13-1.svg",
    title: "01 컵,텀블러 위에 올리면 준비 끝!",
    sub: `사용하는 컵이나 텀블러 위에
루미레이 살균기를 올려놓습니다`,
  },
  {
    img: "section13-2.svg",
    title: "02 위에서 아래로 가볍게 눌러줍니다",
    sub: `올려놓은 살균기를 손바닥으로
눌러주면 컵 살균이 시작됩니다`,
  },
  {
    img: "section13-3.svg",
    title: "03 앞면 LED로 진행여부를 확인하세요",
    sub: `제품 앞면 LED 점등 표시를 보고
살균 진행 여부를 확인합니다`,
  },
  {
    img: "section13-4.svg",
    title: `04 살균이 완료되면 자동으로
전원이 꺼집니다`,
    sub: `올려놓은 살균기를 손바닥으로 다시 눌러주면 수동으로 언제든 전원이 꺼집니다`,
  },
];
function Section13() {
  const agnt = useSelector((state) => state.layouts.type);
  return (
    <div className="section13">
      <div className="top">{agnt === "MB" ? "사용법" : "루미레이 사용법"}</div>
      <div className="title">
        루미레이 컵 살균기 <br /> 어떻게 사용하나요?
      </div>
      <div className="list">
        {dummy.map(({ title, sub, img }, idx) => {
          return (
            <div className="card" key={idx}>
              <img src={`/assets/${img}`} alt="이미지" />
              <div className="title">
                {idx === 3 ? (
                  <>
                    04 살균이 완료되면 자동으로 <br /> 전원이 꺼집니다
                  </>
                ) : (
                  title
                )}
              </div>
              <div className="sub">
                {idx === 3 && agnt === "MB"
                  ? `올려놓은 살균기를 손바닥으로 다시
눌러주면 수동으로 언제든 전원이 꺼집니다`
                  : sub}
              </div>
            </div>
          );
        })}
      </div>
      <div className="s13-bottom">
        <div className="top">주의사항</div>
        <div className="title">
          제품 하단의{agnt === "MB" ? <br /> : undefined} UV램프를 직접적으로
          {agnt === "MB" ? <br /> : undefined}
          바라보지 않습니다
        </div>
        <div className="sub">
          {agnt !== "MB" ? (
            <>
              UV램프의 불빛을 직접적으로 바라보지 않는다면 인체에 해가 되지
              않지만
              <br />
              UV램프는 살균을 위한 자외선을 방출하므로 인체와 가까이 하지 않는
              것이 좋습니다.
            </>
          ) : (
            <>
              UV램프를 직접적으로 바라보지 않는다면 인체에 <br /> 해가 되지
              않지만 살균을 위한 자외선을 방출하므로 <br /> 인체와 가까이 하지
              않는 것이 좋습니다.
            </>
          )}
        </div>
        <img
          className="bottom-img"
          src={`/assets/section13_bottom${agnt === "MB" ? "_mb" : ""}.png`}
          alt="사진"
          srcSet={`/assets/section13_bottom${
            agnt === "MB" ? "_mb" : ""
          }@2x.png 2x,/assets/section13_bottom${
            agnt === "MB" ? "_mb" : ""
          }@3x.png 3x`}
        />
      </div>
    </div>
  );
}

export default Section13;
