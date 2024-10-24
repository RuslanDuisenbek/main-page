import React from "react";
import "./Module.css";
import rect from "../../assets/rect.png";
import timer from "../../assets/timer.png";
import acc from "../../assets/acc.png";
import bolt from "../../assets/bolt.png";
export default function Module({ items }) {
  return (
    <div className="main">
      {items.map((item, index) => (
        <div key={index}>
          <div
            className="mod"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="title">{item.title}</h1>
            <p className="descr">{item.descr}</p>
            <div className="frame_19">
              <div className="ques">
                <img src={rect} alt="img" className="rect" />
                <p className="number_of_ques">{item.number_questions}</p>
              </div>
              <div className="ques">
                <img src={timer} alt="img" className="timer" />
                <p className="time">{item.time}</p>
              </div>
              <div className="ques">
                <img src={acc} alt="img" className="acc" />
                <p className="users">{item.users}</p>
              </div>
            </div>

            <div className="frame_24">
              <div className="frame_21">
                <div className="group_19">
                  Сложность:
                  <div className="bolt">
                    {Array.from({ length: item.complexity }).map((_, i) => (
                      <img
                        key={i}
                        src={bolt}
                        alt="img"
                        className="complexity-img"
                      />
                    ))}
                  </div>
                </div>
                {item.all_date > 0 && (
                  <p className="allDate">Всего дат: {item.all_date}</p>
                )}
              </div>

              <button className="bttn">
                <text className="start">Начать</text>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
