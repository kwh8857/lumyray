import React, { useEffect, useCallback, useState } from "react";
import "./css/index.css";
function Header() {
  const [isOn, setIsOn] = useState(false);
  const __updateScroll = useCallback(
    (value) => {
      if (isOn && value < 586) {
        setIsOn(false);
      } else if (isOn === false && value > 586) {
        setIsOn(true);
      }
    },
    [isOn]
  );
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      __updateScroll(window.scrollY);
    });
    return () => {};
  }, [__updateScroll]);
  return (
    <div className="header" style={{ backgroundColor: isOn ? "#ebebeb" : "" }}>
      <img src="/assets/logo.svg" alt="로고" />
    </div>
  );
}

export default Header;
