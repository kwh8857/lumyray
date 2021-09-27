import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Section7() {
  const agnt = useSelector((state) => state.layouts.type);

  return (
    <div className="section7">
      <div className="s7-1">
        <img
          src={`/assets/section7-1.png`}
          srcSet={`/assets/section7-1@2x.png 2x,/assets/section7-1@3x.png 3x`}
          alt="이미지"
          className="s7-main-img"
        />
        <div className="right">
          <div className="title">
            간편한 케이스 분리로 <br />{" "}
            <span className="bold">가방에 쏙 들어가는 살균기</span>
          </div>
          <div className="sub">
            {agnt !== "MB" ? (
              <>
                기기의 본체와 디자인케이스를 분리하여 사용할 수 있습니다.
                <br /> 간편하게 분리하여 가방에 넣고 휴대하여
                <br /> 학교에서도, 사무실에서도 간편하게 사용하세요.
              </>
            ) : (
              <>
                기기의 본체와 디자인케이스를 분리하여 <br /> 사용할 수 있습니다.
                간편하게 분리하여
                <br /> 가방에 넣고 휴대하여 학교에서도, <br /> 사무실에서도
                간편하게 사용하세요.
              </>
            )}
          </div>
          <img
            className="sub-img"
            src={`/assets/section7-1-sub${agnt === "MB" ? "_mb" : ""}.png`}
            srcSet={`/assets/section7-1-sub${
              agnt === "MB" ? "_mb" : ""
            }@2x.png 2x,/assets/section7-1-sub${
              agnt === "MB" ? "_mb" : ""
            }@3x.png 3x`}
            alt="이미지"
          />
        </div>
      </div>
      <div className="s7-2">
        <div className="left">
          {agnt === "MB" ? (
            <img
              src={`/assets/section7-2.png`}
              srcSet={`/assets/section7-2@2x.png 2x,/assets/section7-2@3x.png 3x`}
              alt="이미지"
              className="s7-main-img"
            />
          ) : undefined}
          <div className="title">
            일상 속 기분전환 <br />{" "}
            <span className="bold">책상 위 나만의 인테리어</span>
          </div>
          <div className="sub">
            지친 일상 속 귀여운 디자인의 루미레이 살균기로 <br /> 책상 위 나만의
            인테리어 소품을 만나보세요
          </div>
        </div>
        {agnt !== "MB" ? (
          <img
            src={`/assets/section7-2.png`}
            srcSet={`/assets/section7-2@2x.png 2x,/assets/section7-2@3x.png 3x`}
            alt="이미지"
            className="s7-main-img"
          />
        ) : undefined}
      </div>
      <div className="s7-3">
        <img
          src={`/assets/section7-3.png`}
          srcSet={`/assets/section7-3@2x.png 2x,/assets/section7-3@3x.png 3x`}
          alt="이미지"
          className="s7-main-img"
        />
        <div className="right">
          <div className="title">
            다양한 커스텀 디자인으로
            <br />
            <span className="bold">나에게 맞는 디자인 살균기</span>
          </div>
          <div className="sub">
            다양한 살균기 디자인으로 일상 속 함께하는 <br /> 인테리어 소품으로도
            활용할 수 있습니다. <br /> 취향에 맞는 디자인 살균기를 만나보세요
          </div>
          <img
            className="sub-img"
            src={`/assets/section7-3-sub${agnt === "MB" ? "_mb" : ""}.png`}
            srcSet={`/assets/section7-3-sub${
              agnt === "MB" ? "_mb" : ""
            }@2x.png 2x,/assets/section7-3-sub${
              agnt === "MB" ? "_mb" : ""
            }@3x.png 3x`}
            alt="이미지"
          />
        </div>
      </div>
    </div>
  );
}

export default Section7;
