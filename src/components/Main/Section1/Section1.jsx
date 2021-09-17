import React, { useCallback, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/index.css";
function Section1() {
  const sectionRef = useRef(null);
  const dispatch = useDispatch();
  const agnt = useSelector((state) => state.layouts.type);

  const __updateAgt = useCallback(
    (e) => {
      if (e.target.innerWidth > 760 && agnt !== "PC") {
        dispatch({
          type: "LAYOUTS/TYPE/CHANGE",
          payload: "PC",
        });
      } else if (e.target.innerWidth < 760 && agnt !== "MB") {
        dispatch({
          type: "LAYOUTS/TYPE/CHANGE",
          payload: "MB",
        });
      }
    },
    [dispatch, agnt]
  );
  const __firstAgt = useCallback(() => {
    if (window.innerWidth > 760) {
      dispatch({
        type: "LAYOUTS/TYPE/CHANGE",
        payload: "PC",
      });
    } else {
      dispatch({
        type: "LAYOUTS/TYPE/CHANGE",
        payload: "MB",
      });
    }
  }, [dispatch]);
  useEffect(() => {
    __firstAgt();
    window.addEventListener("resize", (e) => {
      __updateAgt(e);
    });
    return () => {};
  }, [__updateAgt, __firstAgt]);

  return (
    <div className="section1" ref={sectionRef}>
      <div className="swiper_wrapper">
        <div
          className="swiper"
          style={{
            backgroundImage: `url(${
              agnt === "MB"
                ? "/assets/section1_1_mb.png"
                : "/assets/section1_1.jpg"
            })`,
          }}
        >
          <div className="title">
            일상에서 찾은 {agnt === "MB" ? <br /> : undefined}간편한 깨끗함
            <br />
            <span>루미레이 컵 살균기</span>
          </div>
          <div className="btn">
            루미레이 구매하기 <img src="/assets/arrow.svg" alt="화살표" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
