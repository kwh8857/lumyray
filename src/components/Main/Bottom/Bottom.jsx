import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
function Bottom() {
  const layout = useSelector((state) => state.layouts.bottom);
  const agnt = useSelector((state) => state.layouts.type);
  return (
    <div className="bottom">
      {layout.map((item, idx) => {
        const data = item;
        if (idx === 0) {
          return (
            <div className="one" key={idx}>
              <div className="greybar" />
              <div className="box">
                <div className="title">{item.title}</div>
                <div className="content">
                  {agnt === "MB" ? item.mb : item.content}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="two" key={idx}>
              <div className="greybar" />
              <div className="box">
                <div className="title">{item.title}</div>
                <div className="content">
                  <div className="left">
                    {item.sub.map((item, idx) => {
                      return (
                        <div key={idx} className="sub">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                  <div className="right">
                    {data.content.map((item, idx) => {
                      return (
                        <div key={idx} className="sub">
                          {item}
                        </div>
                      );
                    })}
                  </div>
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
