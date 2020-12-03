import React, { useCallback, useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import "./css/index.css";
function Section1() {
  const sectionRef = useRef(null);

  const layout = useSelector((state) => state.layouts.section1);
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
        if (e < -250) {
          console.log("오른쪽");
          if (foucsIdx !== layout.length - 1) {
            setFoucsIdx(foucsIdx + 1);
          }
        } else if (e > 250) {
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
  useEffect(() => {
    setSlide(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setSlide(e.target.innerWidth);
    });
    return () => {
      window.removeEventListener("resize");
    };
  }, []);
  useEffect(() => {
    __startTimeStart();
    return () => {};
  }, [foucsIdx, __startTimeStart]);
  return (
    <div
      className="section1"
      ref={sectionRef}
      onMouseDown={(e) => {
        if (slide > 760) {
          console.log("마우스다운");
          setDownX(e.clientX);
          __clearTime();
        }
      }}
      onMouseUp={(e) => {
        console.log("마우스업");
        if (slide > 760) {
          __clearTime();
          __swiper(e.clientX, "slide");
        }
      }}
    >
      <div
        className="swiper_wrapper"
        style={{
          transform: `translateX(${-foucsIdx * slide}px)`,
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
                width: `${slide}px`,
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
        onTouchEnd={(e) => {
          if (slide < 761) {
            if (
              e.changedTouches[0].clientX < -250 &&
              foucsIdx !== layout.length - 1
            ) {
              __clearTime();
              __swiper(e.changedTouches[0].clientX, "mobile");
            } else if (e.changedTouches[0].clientX > 250 && foucsIdx !== 0) {
              __clearTime();
              __swiper(e.changedTouches[0].clientX, "mobile");
            }
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
