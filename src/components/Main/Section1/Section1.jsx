import React, { useCallback, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/index.css";
function Section1() {
  const sectionRef = useRef(null);
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.layouts.section1);
  const agnt = useSelector((state) => state.layouts.type);
  const [DownX, setDownX] = useState(undefined);
  const [slide, setSlide] = useState(0);
  const [foucsIdx, setFoucsIdx] = useState(0);
  const [timeId, setTimeId] = useState(undefined);

  const __swiper = useCallback(
    (e, type, idx) => {
      if (type === "slide") {
        if (DownX - e < 0) {
          if (foucsIdx !== 0) {
            setFoucsIdx(foucsIdx - 1);
          }
        } else {
          if (foucsIdx !== layout.length - 1) {
            setFoucsIdx(foucsIdx + 1);
          }
        }
      } else if (type === "auto") {
        if (foucsIdx !== layout.length - 1) {
          setFoucsIdx(foucsIdx + 1);
        } else {
          setFoucsIdx(0);
        }
      } else if (type === "mobile") {
        console.log(e);
        if (DownX - e > 0) {
          console.log("오른쪽");
          if (foucsIdx !== layout.length - 1) {
            setFoucsIdx(foucsIdx + 1);
          }
        } else {
          console.log("왼쪽");
          if (foucsIdx !== 0) {
            setFoucsIdx(foucsIdx - 1);
          }
        }
      } else {
        setFoucsIdx(idx);
      }
    },
    [DownX, foucsIdx, layout]
  );
  const __startTimeStart = useCallback(() => {
    let id = setTimeout((e) => {
      __swiper(window.innerWidth, "auto", foucsIdx);
    }, 2500);
    setTimeId(id);
    return id;
  }, [foucsIdx, __swiper]);
  const __clearTime = useCallback(() => {
    clearTimeout(timeId);
  }, [timeId]);
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
    setSlide(window.innerWidth);
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
    setSlide(window.innerWidth);
    __firstAgt();
    window.addEventListener("resize", (e) => {
      __updateAgt(e);
    });
    return () => {};
  }, [__updateAgt, __firstAgt]);
  useEffect(() => {
    __startTimeStart();
    return () => {};
  }, [foucsIdx, __startTimeStart]);
  return (
    <div
      className="section1"
      ref={sectionRef}
      onMouseDown={(e) => {
        if (agnt === "PC") {
          setDownX(e.clientX);
          __clearTime();
        }
      }}
      onMouseUp={(e) => {
        if (agnt === "PC") {
          __clearTime();
          __swiper(e.clientX, "slide");
        }
      }}
    >
      <div
        className="swiper_wrapper"
        style={{
          transform: `translateX(${-foucsIdx * window.innerWidth}px)`,
          width: `${layout.length * 100}%`,
        }}
      >
        {layout.map((item, idx) => {
          return (
            <div
              className="swiper"
              key={idx}
              style={{
                backgroundImage: `url(${item.image})`,
                width: `${window.innerWidth}px`,
              }}
            />
          );
        })}
      </div>
      <div className="circle_wrapper">
        {layout.map((item, idx) => {
          return (
            <div
              key={idx}
              className="circle"
              style={{ opacity: idx === foucsIdx ? 1 : 0.6 }}
              onClick={() => {
                __clearTime();
                __swiper(slide, "circle", idx);
                // setSwiper(slide * -idx);
                // setFoucsIdx(idx);
              }}
            />
          );
        })}
      </div>
      <div
        className="banner_wrapper"
        onTouchStart={(e) => {
          if (agnt === "MB") {
            __clearTime();
            setDownX(e.targetTouches[0].clientX);
          }
        }}
        onTouchEnd={(e) => {
          console.log(e.changedTouches[0]);
          if (agnt === "MB") {
            __clearTime();
            __swiper(e.changedTouches[0].clientX, "mobile");
          }
        }}
        // onTouchMove={(e) => {
        //   console.log(e.touches);
        // }}
      ></div>
    </div>
  );
}

export default Section1;
