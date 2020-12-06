import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Bottom() {
  const layout = useSelector((state) => state.layouts.bottom);
  return (
    <div className="bottom">
      {layout.map((item, idx) => {
        if (idx === 0) {
          return (
            <div className="one">
              <div className="greybar" />
              <div className="box">
                <div className="title">{item.title}</div>
                <div className="content">{item.content}</div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="two">
              <div className="greybar" />
              <div className="box">
                <div className="title">{item.title}</div>
                <div className="content">
                  {item.sub.map((item, idx) => {
                    return (
                      <div key={idx} className="sub">
                        {item}
                      </div>
                    );
                  })}
                </div>
                <div className="right">
                  {item.content.map((item, idx) => {
                    return (
                      <div key={idx} className="right">
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Bottom;
